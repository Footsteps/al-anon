export function FormConsentCheckbox({
    handleFieldChange, validationErrors, t, e
}) {
    return(
        <div className="consent">
          <input
          className={validationErrors?.consent ? "input-error" : ""}
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleFieldChange}
            required
            aria-invalid={!!validationErrors?.consent}
            aria-describedby={
              validationErrors?.consent ? "consent-error" : undefined
            }
          />
          {validationErrors?.consent && (
            <p id="consent-error" className="sr-only">
              {e[validationErrors?.consent]}
            </p>
          )}
          <label className="section-card" htmlFor="consent">
            {t.labels.checkbox}
          </label>
        </div>
    )
}