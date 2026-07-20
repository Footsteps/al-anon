import { text } from "../data/text.js";
import SEO from "../components/SEO.jsx";
import {seo} from "../data/seo.js"

export default function Home({ language, isMobile }) {
  const t = text[language].home;

  return (
    <>
    <SEO {...seo.home}/>
    <main id="main-content" tabIndex={-1}>
      <h1>{t.title[isMobile ? "isMobile" : "isDesktop"]}</h1>
      <div className="home-container">
        <section className=" section-card welcome">
          <h2>
            <span className="star" aria-hidden="true">
              ☆
            </span>
            {t.welcome.heading}
            <span className="star" aria-hidden="true">
              ☆
            </span>
          </h2>
          <p>{t.welcome.text}</p>
        </section>
        <section className="section-card newcomer">
          <h2>{t.newcomer.heading}</h2>

          <p>
            {t.newcomer.text}{" "}
            <a href={t.link.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.link.text} (öffnet in neuem Tab)`}
>
              {t.link.text}
            </a>
            .
          </p>
        </section>
        <section className="meetings section-card">
          <h2>{t.meetings.heading}</h2>
          <p>
            {t.meetings.text}{" "}
            <a href={t.link.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.link.text} (öffnet in neuem Tab)`}
>
              {t.link.text}
            </a>
            .
          </p>
        </section>
        <section className="conventions section-card">
          <h2>{t.events.heading}</h2>
          <p>{t.events.text}</p>
        </section>
      </div>
    </main>
    </>
  );
}
