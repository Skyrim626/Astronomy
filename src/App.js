import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
