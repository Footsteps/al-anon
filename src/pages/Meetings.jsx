export default function Meetings({language}) {
    return(
        <main>
            <section id="meetings" className="section-card">
                <h2>{language === "de" ? "Englischsprachige Al-Anon Meetings Berlin" : "English speaking Al-Anon meetings Berlin"}</h2>
                <p>
                    {language === "de"
                        ? "Solltest Du vor verschlossener Tür stehen, kontaktiere bitte Al-Anon Deutschland: zdb@al-anon.de"
                        : "Should you encounter closed doors, please contact Al-Anon Germany: zdb@al-anon.de"}
                </p>
            </section>
            <section className="meetings-container">
                <h3 className="h-white-background">WEDNESDAY</h3>
                <div className="card card-glass">
                    <h4>7 pm || "Steps and Spirituality"</h4>
                    <p>Torstr. 190, 10115 B</p>
                    <p>Begegnungsstätte "Mehr Mitte", please knock or ring the bell</p>
                </div>
                <div className="card card-glass">
                    <h4>7 pm || "Serenity"</h4>
                    <p>Barbarossastr. 64, 10781 B</p>
                    <p>Kiezoase, right side wing, ground floor</p>
                    <p>hybrid: call +4922198882117, code 733350#</p>
                </div>
                <h3 className="h-white-background">THURSDAY</h3>
                <div className="card card-glass">
                    <h4>6:30 pm || "Steps & Traditions"</h4>
                    <p>Große Hamburger Str. 29, 10115 B</p>
                    <p>Kieztreff Koeppjohann, left side wing, ground floor </p>
                </div>
                <h3 className="h-white-background">SATURDAY</h3>
                <div className="card card-glass">
                    <h4>11:30 am || "Born free"</h4>
                    <p>Schröderstr. 5, 10115 B</p>
                    <p>through the courtyard, left side wing</p>
                </div>
            </section>
               
            
        </main>
    )
}

