export function useAPI(input) {
  const [geo, setGeo] = useState(null);
  const [inputVal, setInputVal] = useState(input);
  const [errText, setErrText] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchGeoData(val) {
      try {
        const result = await fetchGeo(val, { signal });
        setGeo(result);
        setErrText("");
      } catch (error) {
        setErrText(`Error fetching data: ${error.message}`);
      }
    }

    setGeo(null);
    setInputVal(input);
    fetchGeoData(inputVal);

    return () => controller.abort();
  }, [inputVal, input]);

  return { geo, errText };
}
