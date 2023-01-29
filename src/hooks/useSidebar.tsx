import { useEffect, useState } from "react";



export default function useIsSidebarExpanded() {
  const [isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    
  }, [])

  return { isExpanded, setIsExpanded };
}