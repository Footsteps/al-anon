import Tooltip from "./Tooltip.jsx";
import {text} from "../data/text.js";

function LanguageSwitcher({ language, setLanguage, isMobile }) {
const t = text[language].languageSwitcher;

  return (
    <div role="group" aria-label={t.ariaLabel}>
    <Tooltip text={t.tooltip}>
          <button
            type="button"
            className={`border ${isMobile ? "round-btn" : ""}`}
            onClick={(e) => {
              language === "en" ?
              setLanguage("de")  
              : setLanguage("en");
              e.currentTarget.blur();
            }}
            lang={language === "de" ? "de" : "en"}
            aria-pressed={language === t.ariaPressed}
          >
            {isMobile ? t.switch.mobile : t.switch.desktop}
          </button>
        </Tooltip>
    </div>
  );
}

export default LanguageSwitcher;

