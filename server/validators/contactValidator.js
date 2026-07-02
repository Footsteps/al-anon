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

function validateEvent(body, file) {
  const hasContactInformation = Boolean(
    body["event-email"] || body.website || file,
  );

  if (!body.title) {
    return {
      success: false,
      error: "title_required",
    };
  }

  if (!hasContactInformation) {
    return {
      success: false,
      error: "eventContactInformation_required",
    };
  }

  if (!body.consent) {
    return {
      success: false,
      error: "consent_required",
    };
  }

  return {
    success: true,
  };
}

function validateMessage(body) {
  if (!body.message) {
    return {
      success: false,
      error: "message_required",
    };
  }

  if (!body.consent) {
    return {
      success: false,
      error: "consent_required",
    };
  }


  return {
    success: true,
  };
}
