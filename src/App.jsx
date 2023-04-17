import { useState, useEffect } from "react";
import { Map } from "./components";
import { SearchBar } from "./components";
import { Heading } from "./components";
import { Container } from "./components";
import { IPGeolocation } from "./components";
import { fetchGeo } from "./services/api";
import { Loader } from "./components/Loader";

function App() {
  const [IPAddress, setIPAddress] = useState("");
  const [geo, setGeo] = useState(null);
  const [errText, setErrText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchGeoData(val) {
      try {
        setIsLoading(true);
        const result = await fetchGeo(val, { signal });
        setGeo(result);
        setErrText("");
        setIsLoading(false);
      } catch (error) {
        setErrText(`Error fetching data: ${error.message}`);
      }
    }

    setGeo(null);
    // fetchGeoData(IPAddress);
    console.log(geo);

    return () => controller.abort();
  }, [IPAddress]);

  function setIP(value) {
    setIPAddress(value);
  }

  return (
    <>
      <main>
        <section className="bg-[url('./assets/pattern-bg-desktop.png')]">
          <Container>
            <Heading />
            <SearchBar IPAddress={IPAddress} onFormSubmit={setIP} />
            <section className="relative z-50 w-full mx-auto py-8 bg-white rounded-xl shadow-lg">
              {errText ? (
                <p>errText</p>
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
