export function validateEvent(body, file) {
    const errors = {};

    const hasContactInformation = Boolean(
    body["event-email"] || body.website || file,
  );

  if (!body.title) errors.title = "title_required";

  if (!hasContactInformation) errors.hasContactInformation = "eventContactInformation_required";

  if (!body.consent) errors.consent = "consent_required";

  if (Object.keys(errors).length > 0) {
    return {
        success: false,
        errors
    }
  }

  return {
    success: true,
  };
}
