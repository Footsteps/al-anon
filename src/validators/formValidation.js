export function formValidation(formData) {
    const errors = {};

    const hasEventData = Boolean(
    formData.get("title") ||
    formData.get("startDate") ||
    formData.get("endDate") ||
    formData.get("city") ||
    formData.get("address") ||
    formData.get("organizer") ||
    formData.get("eventLanguage") ||
    formData.get("event-email")||
    formData.get("website") ||
    formData.get("flyer")
  );

  if(hasEventData) console.log("validation needed");


    if (!formData.get("message")) errors.message = "message_required";
    if(!formData.get("consent")) errors.consent = "consent_required";
    
    return errors;
}