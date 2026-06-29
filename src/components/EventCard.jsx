export default function EventCard({event, language}) {
    const lang = language === "de" ? "de-DE" : "en-US";
    const flyerUrl = event.flyer?.[language] || event.flyer?.de || event.flyer?.en;
    
    return(
        <article className="event-card section-card">
                    <h3>{event.title.toLocaleUpperCase()}</h3>

                    <p>
                      <strong>{language === "de" ? "Datum" : "Date"}:</strong>{" "}
                      {new Date(event.startDate).toLocaleDateString(lang)}
                      {" - "}
                      {new Date(event.endDate).toLocaleDateString(lang)}
                    </p>

                    <p>
                      <strong>{language === "de" ? "Ort" : "City"}:</strong>{" "}
                      {event.city}
                    </p>

                    {event.location && <p>
                      <strong>
                        {language === "de" ? "Location" : "Location"}:
                      </strong>{" "}
                      {event.location}
                    </p>
}


                    <p>
                      <strong>
                        {language === "de" ? "Adresse" : "Address"}:
                      </strong>{" "}
                      {event.address}
                    </p>

                      <p>
                        <strong>
                          {language === "de" ? "Organisator_in" : "Host"}:
                        </strong>{" "}
                        {event.organizer}
                      </p>

                      <p>
                        <strong>
                          {language === "de" ? "Sprache" : "Language"}:
                        </strong>{" "}
                        {event.languages?.[language]}
                      </p>

                    {event.email && (
                      <p>
                        <strong>
                          {language === "de" ? "E-Mail" : "Email"}:
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
                        >
                          {language === "de" ? "Webseite" : "Website"}
                        </a>
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
                          >
                            {language === "de"
                              ? "Flyer (PDF öffnen)"
                              : "Flyer (open PDF)"}
                          </a>
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