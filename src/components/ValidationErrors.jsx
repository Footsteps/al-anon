
export function ValidationErrors({errors, messages}) {
    if(!errors || Object.keys(errors).length === 0) {
        return null;
    }

    const uniqueErrors = [...new Set(Object.values(errors))];

    const FIELD_IDS = {
      "message_required": "message",
      "title_required": "title",
      "eventContactInformation_required": "contact-information",
      "consent_required": "consent"
    }

    return (
        <ul className="error-message" role="alert" aria-live="assertive">
          <h3>
            {messages.heading}
          </h3>
          {uniqueErrors.map((err) => (
           <li key={err}>
            <a href={`#${FIELD_IDS[err]}`}>{messages[err]}</a>
           </li>
          ))}
        </ul>
      )
}