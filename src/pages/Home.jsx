export default function Home({ language }) {
  return (
    <>
    <main>
         <h1>
        {language === "de" ? (
          <>
            Al-Anon: <br />
            Englischsprachige Meetings in Berlin & Infos über Conventions{" "}
          </>
        ) : (
          <>
            {" "}
            Al-Anon: <br />
            English speaking meetings Berlin & Infos about Conventions{" "}
          </>
        )}
      </h1>
      <section className="section-card">
        <h2>{language === "de" ? "Willkommen!" : "Welcome!"}</h2>
        <p>
          {language === "de"
            ? "Diese Seite ist privat. Sie sammelt Infos über Conventions (meldet Euch gern, wenn ihr was habt!). Außerdem kann die offizielle Al-Anon Seite (noch) kein Englisch, und hier springt diese Seite mit einem Überblick über alle englischsprachigen Al-Anon Meetings in Berlin ein."
            : "This is a personal page. It collects information about conventions (feel free to contact me if you have any!). Also, the official Al-Anon website isn't available in English (yet), so this site fills that gap and gives an overview of all the English speaking Al-Anon meetings in Berlin."}
        </p>
      </section>
      <section className="section-card">
        <h2>{language === "de" ? "Neu bei Al-Anon?" : "New to Al-Anon?"}</h2>

        <p>
          {language === "de" ? (
            <>
              Bitte schau' zuerst bei <a href="https://al-anon.de">al-anon.de</a>{" "}
              vorbei für Wissenswertes über Al-Anon Meetings.
            </>
          ) : (
            <>
            Please visit <a href="https://al-anon.org">al-anon.org</a> for
              general information about Al-Anon.
            </>
          )}
        </p>
      </section>
      
    </main>
    </>
  );
}
