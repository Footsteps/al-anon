import { validateMessage } from "./messageValidator.js";
import { validateEvent } from "./eventValidator.js";

export function validateSubmission(body, file) {

  const hasEventData = Boolean(
    body.title ||
    body.startDate ||
    body.endDate ||
    body.city ||
    body.address ||
    body.organizer ||
    body.eventLanguage ||
    body["event-email"] ||
    body.website ||
    file,
  );

  if (hasEventData) {
    return validateEvent(body, file);
  }

  return validateMessage(body);
}



