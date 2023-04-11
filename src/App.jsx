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
    fetch(IPAddress);

    return () => {
      ignore = true;
    };
  }, [IPAddress]);

  function handleSubmit(e) {
    e.preventDefault();

    const { value } = e.target.elements.q;
    setIPAddress(value);
  }

  return (
    <>
      <main>
        <section className="bg-[url('./assets/pattern-bg-desktop.png')]">
          <Container>
            <Heading />
            <SearchBar IPAddress={IPAddress} onFormSubmit={handleSubmit} />
            <section className="relative z-50 max-w-5xl w-full mx-auto py-8 bg-white rounded-xl shadow-lg ">
              {isLoading ? <Loader/> : geo && <IPGeolocation geoData={geo} />}
            </section>
          </Container>
        </section>
        <Map />
      </main>
    </>
  );
}

export default App;
