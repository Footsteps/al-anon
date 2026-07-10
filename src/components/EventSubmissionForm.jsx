import { text } from "../data/text.js";
import { errorMessages } from "../data/errorMessages.js";

import { useContactForm } from "../hooks/useContactForm.js";
import { useFocusFirstError } from "../hooks/useFocusFirstError.js";
import { ValidationErrors } from "./ValidationErrors.jsx";
import { EventDetails } from "./FormEventDetails.jsx";
import { FormMessageFields } from "./FormMessageFields.jsx";
import { FormConsentCheckbox } from "./FormConsentCheckbox.jsx";

import { useRef, useEffect } from "react";
import { Form } from "react-router-dom";


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
    isSubmitting,
  } = useContactForm(language);

  function handleFieldChange(e) {
    clearFieldError(e.target.name);
  }

  const successRef = useRef(null);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  useFocusFirstError(validationErrors);

  if (submitted) {
    return (
      <section
        className="submit-section"
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        <p className="section-card info-card">{t.submitText} </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <ValidationErrors errors={validationErrors} messages={e} />

      <p className="section-card info-card">{t.text}</p>

      <fieldset className="form-group">
        
        <FormMessageFields e={e} t={t} validationErrors={validationErrors} handleFieldChange={handleFieldChange}/>

        <EventDetails
          fileName={fileName}
          setFileName={setFileName}
          t={t}
          e={e}
          validationErrors={validationErrors}
          clearFieldError={clearFieldError}
        />

<FormConsentCheckbox handleFieldChange={handleFieldChange} validationErrors = {validationErrors} e={e} t={t}/>

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

        <button
          type="submit"
          value="Submit"
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.labels.sending : t.labels.submit}
        </button>
      </fieldset>
      {/*.form-group */}
    </form>
  );
}
