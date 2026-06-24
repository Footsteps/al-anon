import Tooltip from "./Tooltip.jsx";

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div aria-label="Language switcher" className="lang">
      {language === "en" ? (
        <Tooltip text="Sprache wechseln: deutsch">
          <button
            type="button"
            className="round-btn border"
            onClick={() => setLanguage("de")}
            lang="de"
            aria-pressed={language === "de"}
          >
            DE
          </button>
        </Tooltip>
      ) : (
        <Tooltip text="Switch language: english">
          <button
            type="button"
            className="round-btn"
            onClick={() => setLanguage("en")}
            lang="en"
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </Tooltip>
      )}
    </div>
  );
}

export default LanguageSwitcher;

