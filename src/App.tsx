import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Team } from "./components/Team";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <Team />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
