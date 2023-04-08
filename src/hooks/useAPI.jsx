import { useState, useEffect } from "react";
import { fetchGeo } from "../services/api";

export function useAPI() {
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    async function fetch() {
      const result = await fetchGeo();

      if (!ignore) {
        setGeo(result);
      }
    }

    let ignore = false;
    fetch();
    console.log(geo)

    return () => {
      ignore = true;
    };
  }, []);

  return geo;
}
