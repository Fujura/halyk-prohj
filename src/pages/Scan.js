import QrReader from "../components/QrReader/QrReader"
import Header from "../components/bodyHTML/header/Header";
import Footer from "../components/bodyHTML/Footer/Footer";

export default function Scan() {
  return (
    <>
      <Header />
      <QrReader />
      <Footer />
    </>
  );
}
