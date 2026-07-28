import { useEffect} from "react";

export function useFocusErrorMessage(validationErrors, errorSummaryRef, submitCount) {
    useEffect(() => {
    
        if (!validationErrors || Object.keys(validationErrors).length === 0) return;

          errorSummaryRef.current?.focus();
        
      }, [submitCount]);
    
}