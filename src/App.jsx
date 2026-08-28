import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Admin from "./pages/Admin";
import Websites from "./pages/Websites";
import WebsiteDetail from "./pages/WebsiteDetail";
import Custom from "./pages/Custom";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import DemoView from "./pages/DemoView";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StudioLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StudioLayout><Home /></StudioLayout>} />
        <Route path="/showcase" element={<StudioLayout><Showcase /></StudioLayout>} />
        <Route path="/admin" element={<StudioLayout><Admin /></StudioLayout>} />
        <Route path="/websites" element={<StudioLayout><Websites /></StudioLayout>} />
        <Route path="/websites/:id" element={<StudioLayout><WebsiteDetail /></StudioLayout>} />
        <Route path="/custom" element={<StudioLayout><Custom /></StudioLayout>} />
        <Route path="/customize/:id" element={<StudioLayout><Customize /></StudioLayout>} />
        <Route path="/checkout/:id" element={<StudioLayout><Checkout /></StudioLayout>} />
        <Route path="/about" element={<StudioLayout><About /></StudioLayout>} />
        <Route path="/how-it-works" element={<StudioLayout><HowItWorks /></StudioLayout>} />
        <Route path="/contact" element={<StudioLayout><Contact /></StudioLayout>} />

        {/* Live demo sites — intentionally have no studio chrome, they are the product.
            DemoView resolves :id against the demo registry and renders the demo's root,
            which handles its own sub-pages from useParams(). */}
        <Route path="/demos/:id/*" element={<DemoView />} />

        <Route path="*" element={<StudioLayout><NotFound /></StudioLayout>} />
      </Routes>
    </>
  );
}
