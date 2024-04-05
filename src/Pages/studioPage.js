import React, { Fragment } from "react";
import { Community, ExploreStudio, StudioHome } from "../components";
import { Footer, Navbar } from "../components/common";
import { studioNavbar } from "../constants";

const StudioPage = () => {
  return (
    <Fragment>
      <Navbar data={studioNavbar} />
      <StudioHome />
      <ExploreStudio />
      <Community />
      <Footer />
    </Fragment>
  );
};

export default StudioPage;
