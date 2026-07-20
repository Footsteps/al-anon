import Home from "./pages/Home.jsx";
import Meetings from "./pages/Meetings.jsx";
import Header from "./components/Header.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Impressum from "./pages/Impressum.jsx";
import Privacy from "./pages/Privacy.jsx";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;


export default function App() {
  const pathname = useLocation().pathname;
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.getElementById("main-content")?.focus();
  }, [pathname]);

  useEffect(() => {
  document.documentElement.lang = language;
}, [language]);

  return (
    <div className={`app-container ${pathname.slice(1) || "home"}`}>
      <a href="#main-content" className="skip-link">
        {language === "de" ? "Zum Inhalt springen" : "Skip to main content"}
      </a>
      <Header
        language={language}
        setLanguage={setLanguage}
        isMobile={isMobile}
      />
      <Routes>
        <Route
          path="/"
          element={<Home language={language} isMobile={isMobile} />}
        />
        <Route path="/meetings" element={<Meetings language={language} />} />
        <Route path="/roundups" element={<Events language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/impressum" element={<Impressum language={language} />} />
        <Route path="/privacy" element={<Privacy language={language} />} />
      </Routes>
      <Footer language={language} />
    </div>
  );
}
