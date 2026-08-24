import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Websites from "./pages/Websites";
import WebsiteDetail from "./pages/WebsiteDetail";
import Custom from "./pages/Custom";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import DemoSoraHouse from "./demos/SoraHouse";
import DemoNorthline from "./demos/Northline";
import DemoKairo from "./demos/Kairo";
import DemoArcSupply from "./demos/ArcSupply";
import DemoForma from "./demos/Forma";
import DemoFieldNotes from "./demos/FieldNotes";
import DemoMonoStudio from "./demos/MonoStudio";
import DemoEmberGrain from "./demos/EmberGrain";
import DemoVellore from "./demos/Vellore";
import DemoHealwise from "./demos/Healwise";
import DemoLedgerPine from "./demos/LedgerPine";
import DemoOpenlot from "./demos/Openlot";

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
        <Route path="/websites" element={<StudioLayout><Websites /></StudioLayout>} />
        <Route path="/websites/:id" element={<StudioLayout><WebsiteDetail /></StudioLayout>} />
        <Route path="/custom" element={<StudioLayout><Custom /></StudioLayout>} />
        <Route path="/customize/:id" element={<StudioLayout><Customize /></StudioLayout>} />
        <Route path="/checkout/:id" element={<StudioLayout><Checkout /></StudioLayout>} />
        <Route path="/about" element={<StudioLayout><About /></StudioLayout>} />
        <Route path="/how-it-works" element={<StudioLayout><HowItWorks /></StudioLayout>} />
        <Route path="/contact" element={<StudioLayout><Contact /></StudioLayout>} />

        {/* Live demo sites — intentionally have no studio chrome, they are the product */}
        <Route path="/demos/sora-house" element={<DemoSoraHouse />} />
        <Route path="/demos/northline" element={<DemoNorthline />} />
        <Route path="/demos/kairo" element={<DemoKairo />} />
        <Route path="/demos/arc-supply" element={<DemoArcSupply />} />
        <Route path="/demos/forma" element={<DemoForma />} />
        <Route path="/demos/field-notes" element={<DemoFieldNotes />} />
        <Route path="/demos/mono-studio" element={<DemoMonoStudio />} />
        <Route path="/demos/ember-grain" element={<DemoEmberGrain />} />
        <Route path="/demos/vellore" element={<DemoVellore />} />
        <Route path="/demos/healwise" element={<DemoHealwise />} />
        <Route path="/demos/ledger-pine" element={<DemoLedgerPine />} />
        <Route path="/demos/openlot" element={<DemoOpenlot />} />

        <Route path="*" element={<StudioLayout><NotFound /></StudioLayout>} />
      </Routes>
    </>
  );
}
