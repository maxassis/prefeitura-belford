import React from "react";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
