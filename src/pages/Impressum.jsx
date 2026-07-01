import LegalPage from "../components/LegalPage.jsx"
import {text} from "../data/text.js";
import { Fragment } from "react";

export default function Impressum({language}) {
    const t = text[language].impressum;
        return(
            <LegalPage title={t.title}>
                {t.map(data => (
                    <Fragment key={data.heading}>
                     <h3>{data.heading}</h3>
                     <p>{data.text}</p>
                     </Fragment>
                ))}
            </LegalPage>
        )
}
