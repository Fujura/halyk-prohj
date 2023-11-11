import QRCodeScanner from "./QrReader/QrReader";
import GeoLocation from "./GetCurrentLocation/GetLocation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardContainer from "./bodyHTML/Card/CardContainer.js";

import Header from "./bodyHTML/header/Header";
import CardContainer from "./Card/CardContainer";
import Login from "./Login/Login";
import Home from "../pages/Home";
import ItemCatalog from "./bodyHTML/ItemCatalog/ItemCatalog.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
