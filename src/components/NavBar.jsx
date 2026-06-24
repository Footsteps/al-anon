import {NavLink} from "react-router-dom";
import ContactIcon from "../assets/contact-2.svg";
import LanguageSwitcher from "../components/LanguageSwitcher"

export default function NavBar({language, setLanguage}) {

  return (
    <nav>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <NavLink className={({ isActive }) =>
          `link border ${isActive ? "active" : ""}`}
        to="/">Home</NavLink>
      <NavLink className={({ isActive }) =>
          `link border ${isActive ? "active" : ""}`} 
        to="/meetings">Meetings</NavLink>
      <NavLink className={({ isActive }) =>
          `link border ${isActive ? "active" : ""}`
        } to="/events">Roundups</NavLink>
        <NavLink className={({ isActive }) =>
          `link border round-btn ${isActive ? "active" : ""}`
        } to="/contact"><img className="icon" src={ContactIcon} alt="Home" /></NavLink>
    </nav>
  );
}
