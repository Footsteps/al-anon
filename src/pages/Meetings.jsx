import { meetings as m } from "../data/meetings.js";
import { Fragment } from "react";
export default function Meetings({ language }) {
  return (
    <main className="main-meetings">
      <section id="meetings" className="section-card info-card">
        <h2>{m.info[language].heading}</h2>
        <p>{m.info[language].text}</p>
      </section>
      <section className="meetings-container">
        {m.schedule.map((day) => (
            <Fragment key={day.className}>
              <h3 className={`h-white-background ${day.className}`}>{day.day[language]}</h3>
              <article className={`${day.className}-container`}>
                {day.meetings.map(({className, title, time, address, details}) => (
                    <div
                      className={`card card-glass ${className}`}
                      key={title}
                    >
                      <h4>
                        {time[language]} | "{title}"
                      </h4>
                      <p>{address}</p>
                      {details[language].map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  ))}
              </article>
            </Fragment>
          ))}
      </section>
    </main>
  );
}
