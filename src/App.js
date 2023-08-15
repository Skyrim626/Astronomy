import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Astrobiology from "./pages/Astrobiology";
import News from "./pages/News";
import TelescopeObservatories from "./pages/TelescopeObservatories";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/astrobiology" element={<Astrobiology />} />
        <Route
          path="/telescope_observatories"
          element={<TelescopeObservatories />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
