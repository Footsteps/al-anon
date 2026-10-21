import { NavLink} from "react-router-dom";
import {text} from "../data/text.js";
import ImageCredit from "./ImageCredit.jsx";

export default function Footer({ language }) {
  const t = text[language].footer;
  return (
    <footer>
      <div className="footer-links">
      <NavLink
        className={({ isActive }) =>
          `footer-font ${isActive ? "active border" : ""}`
        }
        to="/impressum"
      >
        {t.impressum}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `footer-font ${isActive ? "active border" : ""}`
        }
        to="/privacy"
      >
        {t.privacy}
      </NavLink>
      </div>
      <div className="footer-credit">
        <ImageCredit language={language}/>
      </div>
    </footer>
  );
}
