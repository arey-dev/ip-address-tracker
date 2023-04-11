import { useState, useEffect } from "react";
import { fetchGeo } from "../services/api";

export function useAPI(input) {
  const [geo, setGeo] = useState(null);
  const [inputVal, setInputVal] = useState(input);

  useEffect(() => {
    async function fetch(val) {
      const result = await fetchGeo(val);

      if (!ignore) {
        setGeo(result);
      }
    }

    let ignore = false;
    setGeo(null);
    setInputVal(input);
    fetch(inputVal);

    return () => {
      ignore = true;
    };
  }, [inputVal]);

  return geo;
}
