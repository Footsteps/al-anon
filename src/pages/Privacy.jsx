import LegalPage from "../components/LegalPage";
import {text} from "../data/text.js";

export default function Privacy({language}) {
    const t = text[language].privacy;

    return(
        <LegalPage title={t.title}>
            <h3>{t.responsible.heading}</h3>
            <p>{t.responsible.text}</p>
            <address>{t.responsible.info.fullName}<br />
            {t.responsible.info.address}</address>
            
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.text}</p>

            <h3>{t.logfiles.heading}</h3>
            <p>{t.logfiles.text}</p>

            <h3>{t.rights.heading}</h3>
            <p>{t.rights.text}</p>

        </LegalPage>
    )
}