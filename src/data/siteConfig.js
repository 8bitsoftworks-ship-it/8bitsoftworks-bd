// Central studio configuration: contact details, payment methods,
// hosting promo and footer-credit discount. Edit values here once and
// they apply across the whole site.

export const STUDIO = {
  name: "8BiT Softworks",
  shortName: "8BiT",
  email: "8bit.softworks@gmail.com",
  location: "Dhaka, Bangladesh — remote-first",
};

// Form backend endpoint. The studio's request forms submit through a free form
// service (FormSubmit AJAX) so the recipient email can include real file
// attachments — a `mailto:` link can never carry attachments.
// First submission triggers a one-time activation email; click the link once
// and submissions (with attachments) flow to the studio inbox afterwards.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${STUDIO.email}`;

// Admin panel passcode. Client-side only — it keeps casual visitors out of the
// management UI, but a static site has no true server-side auth.
export const ADMIN = {
  passcode: "8bit-admin",
  localStorageKey: "8bit_showcases_v1",
  sessionKey: "8bit_admin_authed",
};

// Payment methods accepted at checkout. Each entry defines the account the
// customer pays to, plus the two confirmation fields they must provide.
export const PAYMENTS = {
  redotpay: {
    id: "redotpay",
    name: "RedotPay",
    account: "1899721816",
    accountLabel: "RedotPay UID",
    instructions:
      "Send the total to the RedotPay UID below, then enter your Sender UID and the Transaction ID from the app.",
    fields: [
      { key: "senderId", label: "Sender UID", placeholder: "Your RedotPay UID", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "Transaction ID shown in RedotPay", required: true },
    ],
  },
  bkash: {
    id: "bkash",
    name: "bKash",
    account: "01325575123",
    accountLabel: "bKash (Personal)",
    instructions:
      "Send the total via bKash Send Money to the number below, then enter the number you sent from and the Transaction ID.",
    fields: [
      { key: "phone", label: "Phone number", placeholder: "bKash number you sent from", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "e.g. 9HG7K2L5X1", required: true },
    ],
  },
  nagad: {
    id: "nagad",
    name: "Nagad",
    account: "01325575123",
    accountLabel: "Nagad (Personal)",
    instructions:
      "Send the total via Nagad to the number below, then enter the number you sent from and the Transaction ID.",
    fields: [
      { key: "phone", label: "Phone number", placeholder: "Nagad number you sent from", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "e.g. 3M8T7R2K9Q", required: true },
    ],
  },
};

export const PAYMENT_ORDER = ["redotpay", "bkash", "nagad"];

// 3-months-free hosting promo, offered in collaboration with the studio.
export const HOSTING = {
  freeMonths: 3,
  title: "3 Months Free Hosting",
  note:
    "Every purchase includes 3 months of free hosting — arranged and set up for you in collaboration with 8BiT Softworks. After that, hosting continues at our partner's standard rate, or we help you move anywhere you like.",
};

// Optional footer-credit discount shown in the checkout.
export const AD_CREDIT = {
  percent: 2,
  label: "Add a small “Designed by 8BiT Softworks” credit in my footer",
  note:
    "We place a small text credit and link in your site footer. In return you get 2% off your order total. It can be removed later at any time.",
};

export function discountFor(total, enabled) {
  if (!enabled) return 0;
  return Math.round(total * (AD_CREDIT.percent / 100));
}
