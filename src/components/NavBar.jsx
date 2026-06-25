import {NavLink} from "react-router-dom";
import ContactIcon from "../assets/contact-2.svg";
import LanguageSwitcher from "../components/LanguageSwitcher"
import {useEffect, useState} from "react";

export default function NavBar({language, setLanguage}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <nav>
      <LanguageSwitcher language={language} setLanguage={setLanguage} isMobile={isMobile}/>
      <NavLink className={({ isActive }) =>
          `nav-link border ${isActive ? "active" : ""}`}
        to="/">Home</NavLink>
      <NavLink className={({ isActive }) =>
          `nav-link border ${isActive ? "active" : ""}`} 
        to="/meetings">Meetings</NavLink>
      <NavLink className={({ isActive }) =>
          `nav-link border ${isActive ? "active" : ""}`
        } to="/events">Roundups</NavLink>
        <NavLink className={({ isActive }) =>
          `nav-link border ${isMobile ? "round-btn" : ""} ${isActive ? "active" : ""}`
        } to="/contact">{isMobile? <img className="icon" src={ContactIcon} alt="Home" /> : "Kontakt"}</NavLink>
    </nav>
  );
}
