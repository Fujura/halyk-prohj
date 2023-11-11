import QrReader from "../components/GetCurrentLocation/QrReader/QrReader"
import Header from "../components/bodyHTML/header/Header";

export default function Scan() {
  return (
    <>
      <Header />
      <QrReader />
    </>
  );
}
