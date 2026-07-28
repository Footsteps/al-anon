import { eventValidation } from "./eventValidation.js";

export function formValidation(formData) {

const eventFields = [
    "title", "startDate", "endDate", "city", "address", "organizer", "eventLanguage", "event-email", "website"
]

const hasEventData = eventFields.some(field => 
    String(formData.get(field) || "").trim() !== ""
)

const eventObj = Object.fromEntries(formData.entries());

  const flyer = formData.get("flyer");
  const hasFile = flyer instanceof File && flyer.size > 0;

  if (hasEventData || hasFile) {
    return eventValidation(eventObj, hasFile)
  };

  const errors = {};
  if (!formData.get("message")) errors.message = "message_required";
  if (!formData.get("consent")) errors.consent = "consent_required";
  return errors;
}
