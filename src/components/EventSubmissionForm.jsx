import { useState } from "react";
import { text } from "../data/text.js";
import { errorMessages} from "../data/errorMessages.js";
import { contactService } from "../services/contactService.js";

export default function EventSubmissionForm({ language }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const t = text[language].contact;
  const e = errorMessages[language];
  const [validationErrors, setValidationErrors] = useState();

  async function handleSubmit(e) {
    setValidationErrors({});
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await contactService(formData, language);

      if (!result.success) {
        setValidationErrors(result.errors);
        console.log(result.errors);
        return;
      }

      //setValidationErrors({});
      setSubmitted(true);
      setFileName("");
      form.reset();
    } catch (err) {
      console.log(err);
    }
  }

  if (submitted) {
    return (
      <section className="submit-section">
        <p className="section-card info-card">{t.submitText} </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <p className="section-card info-card">{t.text}</p>
      <fieldset className="form-group">
        {/* NACHRICHT */}
        <legend className="sr-only">{t.labels.message}</legend>
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder={t.labels.message}
          className={validationErrors?.message ? "input-error" : ""}
        />

        {/* EMAIL EVENT */}
        <label htmlFor="email">{t.labels.email}</label>
        <input type="email" name="email" id="email" />

        {/* NAME */}
        <label htmlFor="title">{t.labels.title}</label>
        <input type="text" name="title" id="title" className={validationErrors?.title ? "input-error" : ""}/>

        {/* DATUM */}
        <div className="grid-2-container">
          <div>
            <label htmlFor="startDate">{t.labels.startDate}</label>
            <input type="date" name="startDate" id="startDate" />
          </div>

          <div>
            <label htmlFor="endDate">{t.labels.endDate}</label>
            <input type="date" name="endDate" id="endDate" />
          </div>
        </div>

        {/* ORT */}
        <label htmlFor="city">{t.labels.city}</label>
        <input type="text" name="city" id="city" />

        {/* ADRESSE */}
        <label htmlFor="address">{t.labels.address}</label>
        <input type="text" name="address" id="address" />

        <div className="grid-2-container">
          {/* ORGANIZER */}
          <div>
            <label htmlFor="organizer">{t.labels.organizer}</label>
            <input type="text" name="organizer" id="organizer" />
          </div>

          {/* SPRACHE */}
          <div>
            <label htmlFor="eventLanguage">{t.labels.language}</label>
            <select name="eventLanguage" id="eventLanguage">
              <option value="">{t.labels.option}</option>
              {Object.entries(t.labels.value).map(([key, value]) => (
                <option value={key} key={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>


      <fieldset
      className={`form-group ${validationErrors?.hasContactInformation ? "form-group-error" : ""}`}
      
      >
        <legend className="sr-only">{t.labels.flyer}</legend>

        {/* EMAIL EVENT */}
        <label htmlFor="event-email">{t.labels.eventEmail}</label>
        <input type="email" name="event-email" id="event-email" />

        {/* WEBSITE */}
        <label htmlFor="website">{t.labels.website}</label>
        <input type="url" name="website" id="website" />
      </fieldset>
      {/* .form-group */}

        {/* FLYER */}
        <div className="flyer">
          <label className="file-btn">
            {t.labels.flyer}
            <input
              type="file"
              name="flyer"
              accept=".pdf,image/*"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </label>

          <p>{fileName || t.labels.filename}</p>
        </div>

        {/* KONSENT */}
        <div className="consent">
          <input type="checkbox" name="consent" id="consent" required />
          <label className="section-card" htmlFor="consent">
            {t.labels.checkbox}
          </label>
        </div>
           {validationErrors && Object.keys(validationErrors).length > 0 && <p className="error-message">
            {Object.values(validationErrors).map(err => (
              <li key={err}>{e[err]}</li>
            ))}
            
            </p>}

        <button type="submit" value="Submit" className="form-submit-btn">
          {t.labels.submit}
        </button>
      </fieldset>
      {/*.form-group */}
    </form>
  );
}


