export default function Home({ language, isMobile }) {
  return (
    <main>
      <h1>
        {language === "de" ? (
          isMobile ? (
            <>
              Al-Anon: <br />
              Englischsprachige Meetings in Berlin & Infos über Conventions
            </>
          ) : (
            <>
              Al-Anon: <br />
              Englischsprachige Meetings in Berlin & <br />
              Roundups in Europa
            </>
          )
        ) : isMobile ? (
          <>
            Al-Anon: <br />
            English speaking meetings Berlin & Infos about Conventions
          </>
        ) : (
          <>
            Al-Anon: <br />
            English speaking meetings Berlin & <br />
            Conventions in Europe
          </>
        )}
      </h1>
      <div className="home-container">
        <section className=" section-card welcome">
        
          <h2><span className="star">☆</span>{language === "de" ? "Willkommen!" : "Welcome!"}<span className="star">☆</span></h2>
          <p>
            {language === "de"
              ? `Diese Seite ist privat. Sie sammelt Infos über Conventions. Meldet Euch gern, wenn ihr was habt! Außerdem kann die offizielle Al-Anon Seite al-anon.de (noch) kein Englisch, und hier springt diese Seite mit einem Überblick über alle englischsprachigen Al-Anon Meetings in Berlin ein.`
              : "This is a personal page. It collects information about conventions. Please feel free to contact me if you have any! Also, the official german Al-Anon website al-anon.de isn't available in English (yet), so this site fills that gap and gives an overview of all the English speaking Al-Anon meetings in Berlin."}
          </p>
        </section>
        <section className="section-card newcomer">
          <h2>{language === "de" ? "Neu bei Al-Anon?" : "New to Al-Anon?"}</h2>

          <p>
            {language === "de" ? (
              <>
                Herzlich Willkommen! Bitte schau' zuerst bei <a href="https://al-anon.de">al-anon.de</a> vorbei für
                Wissenswertes über Al-Anon Meetings.
              </>
            ) : (
              <>
                Welcome! Please visit <a href="https://al-anon.org">al-anon.org</a> for
                general information about Al-Anon.
              </>
            )}
          </p>
        </section>
          <section className="meetings section-card">
            <h2>Meetings</h2>
            <p>{language === "de" ? <>
            Dort gibt's eine Liste aller englischsprachigen Meetings in Berlin. Es gibt viel mehr deutschsprachige Meetings und sogar ein polnischsprachiges - Infos bei <a href="https://al-anon.de">al-anon.de </a>.</> :
            <>You'll only find the English speaking meetings in Berlin. There are many more German speaking meetings in Berlin and even one in Polish. For more information, visit <a href="https://al-anon.de">al-anon.de </a>.</> }</p>
          </section>
          <section className="conventions section-card">
            <h2>Conventions</h2>
            <p>{language === "de" ? <>
            Eine Sammlung von Conventions innerhalb und außerhalb Deutschlands. Sie erhebt keinen Anspruch auf Vollständigkeit - und freut sich sehr über Zuwachs (dafür gern das Kontaktformular nutzen).</> :
            <>A list of conventions in and outside of Germany which is by no means exhaustive—and we’d love to hear about any additions (please use the contact form for this).</> }</p>
          </section>
      </div>
    </main>
  );
}
