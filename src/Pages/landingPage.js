import React, { Fragment } from "react";
import { About, Clients, Features, Home, Studio, Work } from "../components";
import { Footer, Navbar } from "../components/common";
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
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
