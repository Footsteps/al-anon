export function FormMessageFields({e, t, validationErrors, handleFieldChange}) {
 return(
    <>
    {/* NACHRICHT */}
            <legend className="sr-only">{t.labels.message}</legend>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder={t.labels.message}
              className={validationErrors?.message ? "input-error" : ""}
              onChange={handleFieldChange}
              aria-invalid={!!validationErrors?.message}
              aria-describedby={
                validationErrors?.message ? "message-error" : undefined
              }
            />
            {validationErrors?.message && (
              <p id="message-error" className="sr-only">
                {e[validationErrors?.message]}
              </p>
            )}
    
            {/* EMAIL */}
            <label htmlFor="email">{t.labels.email}</label>
            <input type="email" name="email" id="email" />
    
    </>
 )   
}