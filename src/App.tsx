import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Pricing from "./components/pricing";
import { Features } from "./components/features";

function App() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  );
}

export default App;
