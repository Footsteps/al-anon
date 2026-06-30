import LegalPage from "../components/LegalPage";

export default function Privacy({language}) {
    return(
        <LegalPage title={language === "de" ? "Datenschutzerklärung": "Privacy Policy"}>
            <h3>{language === "de" ? "1. Verantwortliche": "Responsability"}</h3>
            <p>{language === "de" ? "Verantwortlich für diese Website ist:": "The following person is responsible for this website:"}</p>
            <p>Angela Schumacher <br />
            Röbellweg 14, 13125 Berlin</p>
            
            <h3>{language === "de" ? "2. Kontaktformular": "2. Contact Form"}</h3>
            <p>{language === "de" ? "Wenn du mich über das Kontaktformular kontaktierst, werden die von dir eingegebenen Daten ausschließlich zur Bearbeitung deiner Anfrage verwendet.": "If you contact me via the contact form, the information you provide will be used solely to process your inquiry."}</p>

            <h3>3. Server-Logfiles</h3>
            <p>{language === "de" ? "Beim Besuch dieser Website werden technisch notwendige Informationen (z. B. IP-Adresse, Browsertyp, Uhrzeit) vom Hosting-Anbieter verarbeitet.": "When you visit this website, technically necessary information (e.g., IP address, browser type, time) is processed by the hosting provider."}</p>

            <h3>{language === "de" ? "4. Deine Rechte": "4. Your Rights"}</h3>
            <p>{language === "de" ? "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Beschwerde bei einer Datenschutzaufsichtsbehörde.": "You have the right to access, correct, or delete your personal data, to restrict its processing, and to file a complaint with a data protection supervisory authority."}</p>

        </LegalPage>
    )
}