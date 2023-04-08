import { useState, useEffect } from "react";
import { useAPI } from "./hooks/useAPI";
import { Map } from "./components";
import { SearchBar } from "./components";
import { Heading } from "./components";
import { Container } from "./components";
import { IPGeolocation } from "./components";

function App() {
  const [IPAddress, setIPAddress] = useState("");
  const geo = useAPI();

  function handleValueChange(e) {
    setIPAddress(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <main>
        <section className="bg-[url('./assets/pattern-bg-desktop.png')]">
          <Container>
            <Heading />
            <SearchBar
              IPAddress={IPAddress}
              onValueChange={handleValueChange}
              onFormSubmit={handleSubmit}
            />
            {geo && <IPGeolocation geoData={geo} />}
          </Container>
        </section>
        <Map />
      </main>
    </>
  );
}

export default App;
