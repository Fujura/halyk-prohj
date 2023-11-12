import QRCodeScanner from "./QrReader/QrReader.js"
import GeoLocation from "./GetCurrentLocation/GetLocation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "../pages/Home";
import Scan from "../pages/Scan.js";
import SubItems from "../pages/SubItems.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/items/furniture"
            element={<SubItems value="Furniture" />}
          />
          <Route
            path="/items/electronics"
            element={<SubItems value="Electronics" />}
          />
          <Route path="/items/other" element={<SubItems value="other" />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
