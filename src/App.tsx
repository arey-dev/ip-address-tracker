import { useState, useEffect } from "react";
import { Map } from "./components";
import { SearchBar } from "./components";
import { Heading } from "./components";
import { Container } from "./components";
import { IPGeolocation } from "./components";
import { fetchGeo } from "./services/api";
import { Loader } from "./components/Loader";
import { GeoData } from "./components";

function App() {
  const [IPAddress, setIPAddress] = useState<string>("");
  const [geo, setGeo] = useState<GeoData | null>(null);
  const [errText, setErrText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchGeoData(val: string) {
      try {
        setIsLoading(true);
        const result = await fetchGeo(val, { signal });
        setGeo(result);
        setErrText("");
        setIsLoading(false);
      } catch (error: any) {
        setErrText(`Error fetching data: ${error.message}`);
      }
    }

    setGeo(null);
    fetchGeoData(IPAddress);
    console.log(geo);

    return () => controller.abort();
  }, [IPAddress]);

  function setIP(value: string) {
    setIPAddress(value);
  }

  return (
    <>
      <main>
        <section className="bg-[url('./assets/pattern-bg-desktop.png')]">
          <Container>
            <Heading />
            <SearchBar IPAddress={IPAddress} onFormSubmit={setIP} />
            <section className="relative z-50 w-full mx-auto py-5 sm:py-8 bg-white rounded-xl shadow-lg">
              {errText ? (
                <p>{errText}</p>
              ) : isLoading ? (
                <Loader />
              ) : (
                geo && <IPGeolocation geoData={geo} />
              )}
            </section>
          </Container>
        </section>
        {geo && <Map position={[geo.latitude, geo.longitude]} />}
      </main>
    </>
  );
}

export default App;
