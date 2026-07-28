import { useState } from "react";
import { contactService } from "../services/contactService.js";
import { formValidation } from "../validators/formValidation.js";

export function useContactForm(language) {
    const [submitted, setSubmitted] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const [validationErrors, setValidationErrors] = useState({});
    const [fileName, setFileName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

      async function handleSubmit(e) {
        
        e.preventDefault();
    
        const form = e.currentTarget;
        const formData = new FormData(form);

        /*front end validation*/
        const errors = formValidation(formData);
    
        if(Object.keys(errors).length > 0) {
          setValidationErrors(errors);
          setSubmitCount(count => count + 1);
          return;
        }
        /*frontend validation done*/


        setIsSubmitting(true);
        
        try {
          const result = await contactService(formData, language);
    
          if (!result.success) {
            setValidationErrors(result.errors);
            setSubmitCount(count => count + 1);
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
        submitCount,
        validationErrors,
        fileName,
        setFileName, 
        handleSubmit,
        clearFieldError,
        isSubmitting
      }
}