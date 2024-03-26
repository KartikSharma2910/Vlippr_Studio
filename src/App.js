import React, { Fragment } from "react";
import {
  About,
  Clients,
  Features,
  Home,
  Navbar,
  Studio,
  Work,
} from "./components";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Work />
      <Studio />
      <Clients />
    </Fragment>
  );
};

export default App;
