import {text} from "../data/text.js";

export default function ImageCredit({language, credit}) {
    const t = text[language].footer
    
    
    return (
        <p className="footer-font">
          {t.credit[0]}{" "}
          <a
            className="footer-font"
            href={credit.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credit.author}
          </a>{" "}
          {t.credit[1]}{" "}
          <a
            className="footer-font"
            href={credit.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixabay
          </a>
        </p>
    )
}