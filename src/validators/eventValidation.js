function isValidUrl(value) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function getText(obj, name) {
  return String(obj[name] || "").trim();
}


export function eventValidation(eventObj, hasFile) {
    const errors = {};
    const title = getText(eventObj, "title");
    const website = getText(eventObj, "website");
    const email = getText(eventObj, "event-email");

    const hasContactInformation = Boolean(
        website || email || hasFile        
    )
    
    if(!title) errors.title = "title_required";
    
    if (!hasContactInformation) errors.hasContactInformation = "eventContactInformation_required";
    
    if(website && !isValidUrl(website)) errors.website = "website_invalid";
    
    if(!eventObj.consent.trim()) errors.consent = "consent_required";

    return errors;
}