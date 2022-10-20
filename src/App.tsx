import { BrowserRouter, Route, Routes } from "react-router-dom";
import { E404 } from "./components/E404";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
