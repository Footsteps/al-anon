export function validateMessage(body) {
    const errors = {};
    if (!body.message) errors.message = "message_required";

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