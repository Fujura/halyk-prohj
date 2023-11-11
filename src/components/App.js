import QRCodeScanner from './QrReader/QrReader'
import GeoLocation from "./GetCurrentLocation/GetLocation";
import CardContainer from './bodyHTML/Card/CardContainer.js'

import Header from "./bodyHTML/header/Header";
import ItemCatalog from './bodyHTML/ItemCatalog/ItemCatalog.js';

function App() {
  return (
    <div className="App">
     
    
    <Header />
    {/* <GeoLocation />
    
    <QRCodeScanner />
    <CardContainer /> */}
    <ItemCatalog />
    </div>
  );
}

export default App;
