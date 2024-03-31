import React, { Fragment } from "react";
import { Community, ExploreStudio, Navbar, StudioHome } from "../components";
import { studioNavbar } from "../constants";

const StudioPage = () => {
  return (
    <Fragment>
      <Navbar data={studioNavbar} />
      <StudioHome />
      <ExploreStudio />
      <Community />
    </Fragment>
  );
};

export default StudioPage;
