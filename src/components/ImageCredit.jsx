import {text} from "../data/text.js";

export default function ImageCredit({language}) {
    const t = text[language].footer.credit
    
    
    return (
        <p className="footer-font">
          {t.text1}{" "}
          <a
            className="footer-font"
            href={t.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.author}
          </a>{" "}
          {t.text2}{" "}
          <a
            className="footer-font"
            href={t.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
    )
}