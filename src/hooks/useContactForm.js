import { useState } from "react";
import { contactService } from "../services/contactService.js";

export function useContactForm(language) {
    const [submitted, setSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [fileName, setFileName] = useState("");

      async function handleSubmit(e) {
        
        e.preventDefault();
    
        const form = e.currentTarget;
        const formData = new FormData(form);
    
        try {
          const result = await contactService(formData, language);
    
          if (!result.success) {
            setValidationErrors(result.errors);
            return;
          }
          setValidationErrors({});
          setSubmitted(true);
          setFileName("");
          form.reset();
        } catch (err) {
          console.error(err);
        }
      }
      return {
        submitted, 
        validationErrors,
        fileName,
        setFileName, 
        handleSubmit
      }
}