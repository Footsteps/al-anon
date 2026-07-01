import {text} from "../data/text.js";

export default function EventCard({event, language}) {
    const lang = language === "de" ? "de-DE" : "en-US";
    const flyerUrl = event.flyer?.[language] || event.flyer?.de || event.flyer?.en;
    const textLabels = text[language].events.labels;
    const startDate = new Date(event.startDate).toLocaleDateString(lang);
    const endDate = new Date(event.endDate).toLocaleDateString(lang);
    return(
        <article className="event-card section-card">
                    <h3>{event.title.toUpperCase()}</h3>

                    <p>
                      <strong>{textLabels.date}:</strong>{" "}
                      {startDate} - {endDate}
                    </p>

                    <p>
                      <strong>{textLabels.city}:</strong>{" "}
                      {event.city}
                    </p>

                    <p>
                      <strong>{textLabels.location}:</strong>{" "}
                      {event.location}
                    </p>



                    <p>
                      <strong>{textLabels.address}: </strong>{" "}
                      {event.address}
                      </p>

                      <p>
                        <strong>
                          {textLabels.organizer}:
                        </strong>{" "}
                        {event.organizer}
                      </p>

                      <p>
                        <strong>{textLabels.language}: </strong>
                        {event.languages?.[language]}
                      </p>

                    {event.email && (
                      <p>
                        <strong>
                          {textLabels.email}:
                        </strong>{" "}
                        <a href={`mailto:${event.email}`}>{event.email}</a>
                      </p>
                    )}

                    {event.website && (
                      <p>
                        <a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >{textLabels.website}</a>
                      </p>
                    )}

                    {event.flyer && (
                      <div className="flyer-preview">
                        {/* Falls PDF oder Bild */}
                        {flyerUrl?.endsWith(".pdf") ? (
                          <a
                            href={flyerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >{textLabels.flyer}</a>
                        ) : (
                          <img
                            src={flyerUrl}
                            alt={`Flyer ${event.title}`}
                            width={200}
                          />
                        )}
                      </div>
                    )}
                  </article>
    )
}