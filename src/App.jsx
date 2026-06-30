import Home from "./pages/Home.jsx"; 
import Meetings from "./pages/Meetings.jsx";
import Header from "./components/Header.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";


import { Routes, Route, useLocation } from "react-router-dom";
import {useEffect, useState} from "react"

function App() {

  const location = useLocation();
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={`app-container ${location.pathname.slice(1) || "home"}`}>
      <Header language={language} setLanguage={setLanguage} isMobile={isMobile}/>
      <Routes>
        <Route path="/" element={<Home language={language} isMobile={isMobile} />} />
        <Route path="/meetings" element={<Meetings language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>
      <Footer />       
    </div>
  )
}

export default App
