import { NavLink } from "react-router-dom";
import ContactIcon from "../assets/contact-2.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {text} from "../data/text.js";

export default function NavBar({ language, setLanguage, isMobile}) {
  const t = text[language].navbar;
  return (
    <nav aria-label="Main navigation">
      <LanguageSwitcher
        language={language}
        setLanguage={setLanguage}
        isMobile={isMobile}
      />
      <NavLink
        className={({ isActive }) => 
          `nav-link ${isMobile ? "border" : ""} ${isActive ? "border" : ""}`
        }
        to="/"
      >
        {t.home}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `nav-link ${isMobile ? "border" : ""} ${isActive ? "border" : ""}`
        }
        to="/meetings"
      >
        Meetings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `nav-link ${isMobile ? "border" : ""} ${isActive ? "border" : ""}`
        }
        to="/events"
      >
        Roundups
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `nav-link ${isMobile ? "round-btn border" : ""} ${isActive ? "border" : ""}`
        }
        to="/contact"
        aria-label={t.contact}
      >
        {isMobile ? (
          <img className="icon" src={ContactIcon} alt="" />
        ) : (
          `${t.contact}`
        )}
      </NavLink>
    </nav>
  );
}
