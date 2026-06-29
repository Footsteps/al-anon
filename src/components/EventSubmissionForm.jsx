import { useState } from "react";

export default function EventSubmissionForm({ language }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    setSubmitted(true);
    setFileName("");

    e.target.reset();
  }

  if (submitted) {
    return (
      <section className="submit-section">
        <p className="section-card info-card">
          {language === "de"
            ? "Vielen Dank für Deine Nachricht!"
            : "Thank you for your message!"}
        </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <p className="section-card info-card">
        {language === "de"
          ? "Hier ist Platz für Nachrichten oder Infos über Roundups :)"
          : "This is the space for a message or infos about a Roundup :)"}
      </p>
      <div className="form-group">
        {/* NACHRICHT */}
        <label className="sr-only" htmlFor="message">
          {language === "de" ? "Deine Nachricht" : "Your Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder={language === "de" ? "Deine Nachricht" : "Your Message"}
        />

        {/* NAME */}
        <label htmlFor="name">
          {language === "de" ? "Veranstaltungsname" : "Event Name"}
        </label>
        <input type="text" name="title" id="name" />

        {/* DATUM */}
        <div className="grid-2-container">
          <div>
            <label htmlFor="startDate">
              {language === "de" ? "Veranstaltungsbeginn" : "Start Date"}{" "}
            </label>
            <input type="date" name="startDate" id="startDate" />
          </div>

          <div>
            <label htmlFor="endDate">
              {language === "de" ? "Veranstaltungsende" : "End Date"}
            </label>
            <input type="date" name="endDate" id="endDate" />
          </div>
        </div>

        {/* ORT */}
        <label htmlFor="city">{language === "de" ? "Ort" : "City"}</label>
        <input type="text" name="city" id="city" />

        {/* ADRESSE */}
        <label htmlFor="address">
          {language === "de" ? "Adresse" : "Address"}
        </label>
        <input type="text" name="address" id="address" />

        <div className="grid-2-container">
          {/* ORGANIZER */}
          <div>
            <label htmlFor="organizer">
              {language === "de"
                ? "Welches Programm organisiert?"
                : "Which program is the organizer?"}
            </label>
            <input type="text" name="organizer" id="organizer" />
          </div>

          {/* SPRACHE */}
          <div>
            <label htmlFor="eventLanguage">
              {language === "de" ? "Sprache Roundup" : "Event Language"}
            </label>
            <select name="eventLanguage" id="eventLanguage">
              <option value="">
                {language === "de" ? "Bitte wählen" : "Please choose"}
              </option>

              <option value="de">Deutsch</option>

              <option value="en">English</option>

              <option value="both">
                {language === "de" ? "Deutsch & Englisch" : "English & German"}
              </option>

              <option value="other">
                {language === "de" ? "Andere Sprache" : "Another language"}
              </option>
            </select>
          </div>
        </div>

        {/* EMAIL EVENT */}
        <label htmlFor="email">
          {language === "de"
            ? "Email des Events (optional)"
            : "E-Mail of event (optional)"}
        </label>
        <input type="email" name="email" id="email" />

        {/* WEBSITE */}
        <label htmlFor="website">
          {language === "de" ? "Webseite (optional)" : "Website (optional)"}
        </label>
        <input type="url" name="website" id="website" />
      </div>
      {/* .form-group */}

      <div className="form-group">
        {/* FLYER */}
        <div className="flyer">
          <label className="file-btn">
            {language === "de"
              ? "Flyer (PDF oder Bild) hochladen"
              : "Upload Flyer (PDF or image)"}
            <input
              type="file"
              name="flyer"
              accept=".pdf,image/*"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </label>

          <p>
            {fileName
              ? fileName
              : language === "de"
                ? "Keine Datei beigefügt"
                : "No file uploaded"}
          </p>
        </div>

        {/* KONSENT */}
        <div className="consent">
          <input type="checkbox" name="consent" id="consent" required />
          <label className="section-card" htmlFor="consent">
            {language === "de"
              ? "Ich bin damit einverstanden, dass die übermittelten Daten ggf. zur Veröffentlichung der Veranstaltung verarbeitet werden."
              : "I agree that the submitted information may be processed for publication of the event."}
          </label>
        </div>
        <button type="submit" value="Submit" className="form-submit-btn">
          {language === "de" ? "Absenden" : "Sunmit"}
        </button>
      </div>
      {/*.form-group */}
    </form>
  );
}
