import { useEffect, useMemo, useState } from "react";

export default function useMediaQuery(query: string) {
  const mql = useMemo(() => window.matchMedia(query), [query]);
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const changeEvent = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", changeEvent);
    return () => mql.removeEventListener("change", changeEvent);
  }, [query]);

  return matches;
}
