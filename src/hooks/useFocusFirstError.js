import { useEffect } from "react";

const FIELD_ORDER = ["message", "title", "hasContactInformation", "consent"];

export function useFocusFirstError(validationErrors) {
    useEffect(() => {
        if (!validationErrors || Object.keys(validationErrors.length === 0)) return;
    
        const firstError = FIELD_ORDER.find((field) => validationErrors[field]);
        if (!firstError) return;
    
        const element =
          firstError === "hasContactInformation"
            ? document.querySelector(".form-group-error")
            : document.querySelector(`[name="${firstError}"]`);
    
        if (!element) return;
    
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    
        element.focus();
      }, [validationErrors]);
    
}