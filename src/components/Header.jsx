import NavBar from "./NavBar.jsx";

export default function Header({language, setLanguage, isMobile}) {
  return (
    <header className="wave-border" role="banner">
        <NavBar language={language} setLanguage={setLanguage} isMobile={isMobile}/>
    </header>
  );
}
