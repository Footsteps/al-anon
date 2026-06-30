import { NavLink, useLocation } from "react-router-dom";

export default function Footer({language}) {
    const location = useLocation();

    return(
        <footer>            
            <NavLink className={({ isActive }) =>`footer-font ${isActive ? "active" : ""}`} to="/impressum" language={language}>{language === "de" ? "Impressum" : "Legal Notice"}</NavLink>
            <NavLink className={({ isActive }) =>`footer-font ${isActive ? "active" : ""}`} to="/privacy" language={language}>{language === "de" ? "Datenschutz" : "Privacy Policy"}</NavLink>

            {location.pathname === "/meetings" &&
            (<p className="footer-font">Hintergrundbild von <a className="footer-font" href="https://pixabay.com/de/users/slightly_different-2006397/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3728327">Sly </a> 
                auf <a className="footer-font" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3728327">Pixabay</a>
            </p>)
            }
            {location.pathname === "/events" &&
            (<p className="footer-font">Hintergrundbild von <a className="footer-font" href="https://pixabay.com/de/users/fossane-202471/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4908017">Tim Mrzyglod</a> auf <a className="footer-font" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4908017">Pixabay</a>
            </p>)
            } 
            {location.pathname === "/contact" &&
            (<p className="footer-font">Hintergrundbild von <a className="footer-font" href="https://pixabay.com/de/users/lum3n-1066559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">LUM3N</a> auf <a className="footer-font" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">Pixabay</a></p>)
            } 
        </footer>
    )
}
