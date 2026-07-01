import { NavLink, useLocation } from "react-router-dom";
import { imageCredits } from "../data/imageCredits.js";
import {text} from "../data/text.js";
import ImageCredit from "./ImageCredit.jsx";

export default function Footer({ language }) {
  const location = useLocation();
  const credit = imageCredits[location.pathname];
  const t = text[language].footer;
  return (
    <footer>
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

      {credit && (
        <ImageCredit language={language} credit={credit}/>
      )}
    </footer>
  );
}
