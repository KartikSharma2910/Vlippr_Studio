import React from "react";
import { RegistrationForm } from "../components";
import { Footer, Navbar } from "../components/common";
import { studioNavbar } from "../constants";

const RegistrationPage = () => {
  return (
    <>
      <Navbar data={studioNavbar} />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
