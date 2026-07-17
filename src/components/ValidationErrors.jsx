import { forwardRef } from "react";

export const ValidationErrors = forwardRef(function ValidationErrors({errors, messages}, ref) {
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
      <div ref={ref}
      tabIndex={-1} className="error-message" role="alert">
      <h3>
            {messages.heading}
          </h3>
        <ul >
          {uniqueErrors.map((err) => (
           <li key={err}>
            <a href={`#${FIELD_IDS[err]}`}>{messages[err]}</a>
           </li>
          ))}
        </ul>
        </div>
      )
})