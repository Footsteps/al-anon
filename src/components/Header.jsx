import NavBar from "./NavBar.jsx";

export default function Header({language, setLanguage}) {
  return (
    <header className="wave-border">
        <NavBar aria-label="Main navigation" language={language} setLanguage={setLanguage}/>
    </header>
  );
}
