import EventCard from "../components/EventCard.jsx";
import data from "../data/events.json";

export default function Events({ language }) {
  return (
    <main className="events">
      <section className="section-card">
        <p>
          {language === "de"
            ? "Veranstaltungen von AA werden nur gelistet, wenn sie eine Al-Anon Beteiligung haben: Al-Anon Meetings und Al-Anon Sprecher_innen."
            : "AA events are listed only if they include Al-Anon participation: Al-Anon meetings and Al-Anon speakers."}
        </p>
      </section>
      {data.map(
        (monthGroup) =>
          monthGroup.events?.length > 0 && (
            <section key={monthGroup.id}>
              <h2 className="h-white-background">
                {language === "de" ? monthGroup.month.de : monthGroup.month.en}
              </h2>
              <div className="events-container">
              {monthGroup.events.map((event) => {
                return (
                  <EventCard language={language} event = {event} key={event.id}/>
                );
              })}
              </div>
            </section>
          ),
      )}
    </main>
  );
}
