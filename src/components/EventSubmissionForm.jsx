import { text } from "../data/text.js";
import { errorMessages } from "../data/errorMessages.js";

import { useContactForm } from "../hooks/useContactForm.js";
import { useFocusFirstError } from "../hooks/useFocusFirstError.js";
import { ValidationErrors } from "./ValidationErrors.jsx";
import { EventDetails } from "./EventDetails.jsx";

export default function EventSubmissionForm({ language }) {
  const t = text[language].contact;
  const e = errorMessages[language];

  const {
    submitted,
    validationErrors,
    fileName,
    setFileName,
    handleSubmit,
    clearFieldError,
  } = useContactForm(language);

  function handleFieldChange(e) {
    clearFieldError(e.target.name);
  }

  useFocusFirstError(validationErrors);

  if (submitted) {
    return (
      <section className="submit-section">
        <p className="section-card info-card">{t.submitText} </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <ValidationErrors errors={validationErrors} messages={e} />

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
          onChange={handleFieldChange}
        />

        {/* EMAIL */}
        <label htmlFor="email">{t.labels.email}</label>
        <input type="email" name="email" id="email" />

        <EventDetails
          fileName={fileName}
          setFileName={setFileName}
          t={t}
          validationErrors={validationErrors}
          clearFieldError={clearFieldError}
        />

        {/* KONSENT */}
        <div className="consent">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleFieldChange}
            required
          />
          <label className="section-card" htmlFor="consent">
            {t.labels.checkbox}
          </label>
        </div>

        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contactPerson">Company</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            autoComplete="off"
            tabIndex="-1"
          />
        </div>

        <button type="submit" value="Submit" className="form-submit-btn">
          {t.labels.submit}
        </button>
      </fieldset>
      {/*.form-group */}
    </form>
  );
}
