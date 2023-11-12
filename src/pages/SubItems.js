import React from "react";
import CardContainer from "../components/Card/CardContainer";
import Footer from "../components/bodyHTML/Footer/Footer";
import Header from "../components/bodyHTML/header/Header";
export default function SubItems({ value }) {
  return (
    <div>
      <Header />
      <CardContainer value={value} />
      <Footer />
    </div>
  );
}
