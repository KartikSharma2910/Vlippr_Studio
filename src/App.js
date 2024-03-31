import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import StudioPage from "./Pages/studioPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/studio" element={<StudioPage />} />
    </Routes>
  );
};

export default App;
