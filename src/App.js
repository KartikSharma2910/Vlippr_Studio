import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import RegistrationPage from "./Pages/registrationPage";
import StudioPage from "./Pages/studioPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
