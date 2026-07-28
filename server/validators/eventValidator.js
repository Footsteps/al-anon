function isValidUrl(value) {
  if (!value) return true;

  try {
    const url = new URL(value);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}


export function validateEvent(body, file) {
    const errors = {};

    const hasContactInformation = Boolean(
    body["event-email"] || body.website || file,
  );

  if (!body.title) errors.title = "title_required";

  if (!hasContactInformation) errors.hasContactInformation = "eventContactInformation_required";

  if (body.website && !isValidUrl(body.website)) {
    errors.website = "website_invalid";
  }

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
