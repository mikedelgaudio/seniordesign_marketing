import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./components/Blog";
import { E404 } from "./components/E404";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <BrowserRouter basename="/">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/timeline" element={<Timeline />} />
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
