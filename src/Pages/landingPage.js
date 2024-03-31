import React, { Fragment } from "react";
import {
  About,
  Clients,
  Features,
  Home,
  Navbar,
  Studio,
  Work,
} from "../components";
import { navbar } from "../constants";

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar data={navbar} />
      <Home />
      <About />
      <Features />
      <Work />
      <Studio />
      <Clients />
    </Fragment>
  );
};

export default LandingPage;
