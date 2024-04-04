import React from "react";
import { Navbar, RegistrationForm } from "../components";
import { studioNavbar } from "../constants";

const RegistrationPage = () => {
  return (
    <>
      <Navbar data={studioNavbar} />
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
