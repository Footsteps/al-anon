import { useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();
    console.log(location.pathname);
    return(
        <footer>
            {location.pathname === "/meetings" &&
            (<span className="picture-source">Bild von <a href="https://pixabay.com/de/users/slightly_different-2006397/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3728327">Sly</a> 
                auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3728327">Pixabay</a>
            </span>)
            }
            {location.pathname === "/events" &&
            (<span className="picture-source">Bild von <a href="https://pixabay.com/de/users/fossane-202471/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4908017">Tim Mrzyglod</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4908017">Pixabay</a>
            </span>)
            } 
            {location.pathname === "/contact" &&
            (<span className="picture-cource">Bild von <a href="https://pixabay.com/de/users/lum3n-1066559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">LUM3N</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">Pixabay</a></span>)
            } 
            
            <span className="impressum"></span>

        </footer>
    )
}
