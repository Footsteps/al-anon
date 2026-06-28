import Tooltip from "./Tooltip.jsx";

function LanguageSwitcher({ language, setLanguage, isMobile }) {

  return (
    <div aria-label="Language switcher">
      {language === "en" ? (
        <Tooltip text="Sprache wechseln: deutsch">
          <button
            type="button"
            className={`border ${isMobile ? "round-btn" : ""}`}
            onClick={(e) => {
              setLanguage("de");
              e.currentTarget.blur();
            }}
            lang="de"
            aria-pressed={language === "de"}
          >
            {isMobile ? "DE" : "Sprache wechseln"}
          </button>
        </Tooltip>
      ) : (
        <Tooltip text="Switch language: english">
          <button
            type="button"
            className={`border ${isMobile ? "round-btn" : ""}`}
            onClick={(e) => {
              setLanguage("en");
              e.currentTarget.blur();
            }}
            lang="en"
            aria-pressed={language === "en"}
          >
            {isMobile ? "EN" : "Switch Language"}
          </button>
        </Tooltip>
      )}
    </div>
  );
}

export default LanguageSwitcher;

