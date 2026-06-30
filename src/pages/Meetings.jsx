export default function Meetings({language}) {
    return(
        <main className="main-meetings">
            <section id="meetings" className="section-card info-card">
                <h2>{language === "de" ? "Englischsprachige Al-Anon Meetings Berlin" : "English speaking Al-Anon meetings Berlin"}</h2>
                <p>
                    {language === "de"
                        ? "Solltest Du vor verschlossener Tür stehen, kontaktiere bitte Al-Anon Deutschland: zdb@al-anon.de"
                        : "Should you encounter closed doors, please contact Al-Anon Germany: zdb@al-anon.de"}
                </p>
            </section>
            <section className="meetings-container">
                <h3 className="h-white-background wednesday">WEDNESDAY</h3>
                <div className="wednesday-container">
                <div className="card card-glass steps-and-spirituality">
                    <h4>7 pm || "Steps and Spirituality"</h4>
                    <p>Torstr. 190, 10115 Berlin</p>
                    <p>Begegnungsstätte 'Mehr Mitte', please knock or ring the bell</p>
                </div>
                <div className="card card-glass serenity">
                    <h4>7 pm || "Serenity"</h4>
                    <p>Barbarossastr. 64, 10781 Berlin</p>
                    <p>Kiezoase, right side wing, ground floor</p>
                    <p>hybrid: call +4922198882117, code 733350#</p>
                </div>
                </div>
                <h3 className="h-white-background thursday">THURSDAY</h3>
                <div className="card card-glass steps-and-traditions">
                    <h4>6:30 pm || "Steps & Traditions"</h4>
                    <p>Große Hamburger Str. 29, 10115 Berlin</p>
                    <p>Kieztreff Koeppjohann, left side wing, ground floor </p>
                </div>
                <h3 className="h-white-background saturday">SATURDAY</h3>
                <div className="card card-glass born-free">
                    <h4>11:30 am || "Born free"</h4>
                    <p>Schröderstr. 5, 10115 B</p>
                    <p>through the courtyard, left side wing</p>
                </div>
            </section>
               
            
        </main>
    )
}

