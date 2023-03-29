import { Map } from "./Map";
import { SearchBar } from "./components";
import { Heading } from "./components";
import { Container } from "./components";

function App() {
  return (
    <>
      <main>
        <section className="bg-[url('./assets/pattern-bg-desktop.png')]">
          <Container>
            <Heading />
            <SearchBar />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
