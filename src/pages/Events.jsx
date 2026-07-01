import EventCard from "../components/EventCard.jsx";
import {events} from "../data/events.js";
import {text} from "../data/text.js";

export default function Events({ language }) {
  const eventsText = text[language].events.text;

  return (
    <main className="events-main">
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
  );
}
