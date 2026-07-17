import { useEffect} from "react";

export function useFocusErrorMessage(validationErrors, errorSummaryRef, submitCount) {
console.log(submitCount);
    useEffect(() => {
    

        if (!validationErrors || Object.keys(validationErrors).length === 0) return;

          errorSummaryRef.current?.focus();
    
        
      }, [submitCount]);
    
}