import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import RegistrationPage from "./Pages/registrationPage";
import StudioPage from "./Pages/studioPage";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
