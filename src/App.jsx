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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch(val) {
      setIsLoading(true);
      const result = await fetchGeo(val);

      if (!ignore) {
        setGeo(result);
        setIsLoading(false);
      }
    }

    let ignore = false;
    setGeo(null);
    // fetch(IPAddress);
    console.log(geo);

    return () => {
      ignore = true;
    };
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
              {isLoading ? <Loader /> : geo && <IPGeolocation geoData={geo} />}
            </section>
          </Container>
        </section>
        {geo && <Map position={[geo.latitude, geo.longitude]} />}
      </main>
    </>
  );
}

export default App;
