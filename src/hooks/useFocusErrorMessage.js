import { useEffect} from "react";

export function useFocusErrorMessage(summaryErrors, errorSummaryRef, submitCount) {
    useEffect(() => {
      if (!summaryErrors || Object.keys(summaryErrors).length === 0) return;

          errorSummaryRef.current?.focus();
        
      }, [submitCount]);
    
}