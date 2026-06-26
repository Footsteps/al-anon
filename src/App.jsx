import Home from "./pages/Home.jsx"; 
import Meetings from "./pages/Meetings.jsx";
import Header from "./components/Header.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";


import { Routes, Route, useLocation } from "react-router-dom";
import {useEffect, useState} from "react"

function App() {

  const location = useLocation();
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
      const handleResize = () => {
        console.log(window.innerWidth);
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={`app-container ${location.pathname.slice(1) || "home"}`}>
      <Header language={language} setLanguage={setLanguage} isMobile={isMobile}/>
      <Routes>
        <Route path="/" isMobile={isMobile} element={<Home language={language}/>} />
        <Route path="/meetings" element={<Meetings language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>       
    </div>
  )
}

export default App
