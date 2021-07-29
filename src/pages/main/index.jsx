import React from "react";
import Header from "../../components/Header/index.jsx";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Footer from "../../components/Footer";

export default function Main() {
  return (
    <>
      <Header Show />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
