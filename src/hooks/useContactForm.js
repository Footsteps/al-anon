import { useState } from "react";
import { contactService } from "../services/contactService.js";

export function useContactForm(language) {
    const [submitted, setSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [fileName, setFileName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

      async function handleSubmit(e) {
        
        e.preventDefault();

        setIsSubmitting(true);
    
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
        } finally {
            setIsSubmitting(false);
        }
      }

      function clearFieldError(fieldName) {
        setValidationErrors(prev => {
            if(!prev[fieldName]) return prev;

            const next = {...prev};
            delete next[fieldName];

            return next;
        })
      }


      return {
        submitted, 
        validationErrors,
        fileName,
        setFileName, 
        handleSubmit,
        clearFieldError,
        isSubmitting
      }
}