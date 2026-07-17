export function EventDetails({
  validationErrors,
  e,
  t,
  fileName,
  setFileName,
  clearFieldError,
}) {
  return (
    <>
      {/* NAME */}
      <label htmlFor="title">{t.labels.title}</label>
      <input
        type="text"
        name="title"
        id="title"
        className={validationErrors?.title ? "input-error" : ""}
        onChange={() => clearFieldError("title")}
        aria-invalid={!!validationErrors?.title}
        aria-describedby={validationErrors?.title ? "title-error" : undefined}
      />
      {validationErrors?.title && (
        <p id="title-error" className="sr-only">
          {e[validationErrors?.title]}
        </p>
      )}

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
        id="contact-information"
        tabIndex={-1}
        className={`form-group ${validationErrors?.hasContactInformation ? "form-group-error" : ""}`}
        aria-describedby={
          validationErrors?.hasContactInformation ? "contact-error" : undefined
        }
      >
        {validationErrors?.hasContactInformation && (
          <p id="contact-error" className="sr-only">
            {e[validationErrors?.hasContactInformation]}
          </p>
        )}
        <legend className="sr-only">{t.labels.flyer}</legend>

        {/* EMAIL EVENT */}
        <label htmlFor="event-email">{t.labels.eventEmail}</label>
        <input type="email" name="event-email" id="event-email" />

        {/* WEBSITE */}
        <label htmlFor="website">{t.labels.website}</label>
        <input type="url" name="website" id="website" />

        {/* FLYER */}
        <div className="flyer">
          <label
            className={`file-btn ${
              validationErrors?.flyer === "file_too_large" ||
              validationErrors?.flyer === "invalid_file_type"
                ? "input-error"
                : ""
            }`}
          >
            {t.labels.flyer}
            <input
              type="file"
              name="flyer"
              accept=".pdf,image/*"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              aria-invalid={
                validationErrors?.flyer === "file_too_large" ||
                validationErrors?.flyer === "invalid_file_type"
              }
              aria-describedby={
                validationErrors?.flyer ? "flyer-error" : undefined
              }
            />
            {validationErrors?.flyer && (
              <p id="flyer-error" className="sr-only">
                {e[validationErrors.flyer]}
              </p>
            )}
          </label>

          <p>{fileName || t.labels.filename}</p>
        </div>
      </fieldset>
      {/* .form-group */}
    </>
  );
}
