import EventCard from "../components/EventCard.jsx";
import {events} from "../data/events.js";
import {text} from "../data/text.js";
import SEO from "../components/SEO.jsx";
import {seo} from "../data/seo.js"

export default function Events({ language }) {
  const eventsText = text[language].events.text;

  return (
    <>
    <SEO {...seo.events}/>
    <main className="events-main" id="main-content" tabIndex={-1}>
      <section className="section-card info-card">
        <p>{eventsText}</p>
      </section>
      {events.filter(({events})=> events?.length > 0)
      .map(({id, month, events}) => (
         <section key={id} className="month-group">
          <h2 className="h-white-background">
                {month[language]}
              </h2>
              <div className="event-cards-container">
              {events.map((event) =>  (
                  <EventCard language={language} event = {event} key={event.id}/>
                )
              )}
              </div>
         </section>

      )/*map*/
      )} /*filter*/
    </main>
    </>
  );
}
