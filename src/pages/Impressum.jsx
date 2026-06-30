import LegalPage from "../components/LegalPage.jsx"

export default function Impressum({language}) {
        return(
            <LegalPage title="Impressum">
                <h3>{language === "de" ? "Angaben gemäß § 5 DDG" : "Information pursuant to Section 5 of the DDG"}</h3>

                <p>Angela Schumacher <br />
                    Röbellweg 14    <br />
                    13125 Berlin
                </p>

                <h3>{language === "de"?"Kontakt":"Contact"}</h3>
                <p>E-Mail: angelaschumacher@web.de</p>

                <h3>{language === "de"?"Verantwortlich für den Inhalt":"Responsible for the content"}</h3>
                <p>Angela Schumacher <br />
                    {language === "de" ? "Anschrift wie oben":"Address as above"}
                </p>
            </LegalPage>
        )
}