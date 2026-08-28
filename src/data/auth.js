// Customer accounts — client-side only (a static site has no backend).
// Users and the active session live in localStorage; passwords are hashed
// with SHA-256 via the Web Crypto API and never stored in plaintext.
//
// Note: this is convenience-level auth, not real security. Any visitor could
// edit localStorage. It exists so visitors can save favorites and track their
// orders without a backend.

import { useEffect, useState } from "react";

const USERS_KEY = "8bit_users_v1";
const SESSION_KEY = "8bit_session_v1";
export const AUTH_EVENT = "8bit_auth_change";

function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {
    // storage unavailable — session still works in-memory
  }
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function emitChange() {
  window.dispatchEvent(new CustomEvent(AUTH_EVENT));
}

export function setSession(user) {
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ userId: user.id, loggedInAt: Date.now() })
    );
  } catch {
    // ignore
  }
  emitChange();
}

export function getCurrentUser() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    if (!session) return null;
    return getUsers().find((u) => u.id === session.userId) || null;
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return Boolean(getCurrentUser());
}

export async function signUp({ name, email, password }) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanName = String(name || "").trim();
  if (!cleanName) throw new Error("Please enter your name.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cleanEmail))
    throw new Error("Please enter a valid email address.");
  if (!password || password.length < 6)
    throw new Error("Password must be at least 6 characters.");

  const users = getUsers();
  if (users.some((u) => u.email === cleanEmail))
    throw new Error("An account with that email already exists. Sign in instead.");

  const passHash = await hashPassword(password);
  const user = {
    id: `usr-${Date.now().toString(36)}`,
    name: cleanName,
    email: cleanEmail,
    passHash,
    createdAt: Date.now(),
    favorites: [],
    orders: [],
  };
  users.push(user);
  saveUsers(users);
  setSession(user);
  return getCurrentUser();
}

export async function logIn({ email, password }) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const users = getUsers();
  const user = users.find((u) => u.email === cleanEmail);
  if (!user) throw new Error("No account found for that email.");
  const passHash = await hashPassword(password || "");
  if (user.passHash !== passHash) throw new Error("Incorrect password.");
  setSession(user);
  return getCurrentUser();
}

export function logOut() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
  emitChange();
}

export function toggleFavorite(siteId) {
  const user = getCurrentUser();
  if (!user) return null;
  const users = getUsers();
  const target = users.find((u) => u.id === user.id);
  if (!target) return null;
  target.favorites = target.favorites.includes(siteId)
    ? target.favorites.filter((f) => f !== siteId)
    : [...target.favorites, siteId];
  saveUsers(users);
  emitChange();
  return target.favorites;
}

export function isFavorite(siteId) {
  const user = getCurrentUser();
  return Boolean(user && user.favorites.includes(siteId));
}

export function addOrder(order) {
  const user = getCurrentUser();
  if (!user) return null;
  const users = getUsers();
  const target = users.find((u) => u.id === user.id);
  if (!target) return null;
  target.orders = [{ ...order, placedAt: Date.now() }, ...(target.orders || [])];
  saveUsers(users);
  emitChange();
  return target.orders;
}

// React hook — re-renders components when auth state changes (this tab via
// events, other tabs via the `storage` event).
export function useAuth() {
  const [user, setUser] = useState(() => getCurrentUser());
  useEffect(() => {
    const onChange = () => setUser(getCurrentUser());
    window.addEventListener(AUTH_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(AUTH_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  return user;
}
