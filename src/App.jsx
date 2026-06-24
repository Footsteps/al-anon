import Home from "./pages/Home.jsx"; 
import Meetings from "./pages/Meetings.jsx";
import Header from "./components/Header.jsx";
import Events from "./pages/Events.jsx";


import { Routes, Route, useLocation } from "react-router-dom";
import {useState} from "react"



function App() {

  const location = useLocation();
  const [language, setLanguage] = useState("en");
  
  return (
    <div className={`app-container ${location.pathname.slice(1) || "home"}`}>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/meetings" element={<Meetings language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
      </Routes>       
    </div>
  )
}

export default App
