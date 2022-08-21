import * as React from "react";

import SiteHeader from "./components/header/siteheader";
import SiteFooter from "./components/footer/sitefooter";

import "./App.css";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  Container,
} from "@mui/material";
import CustomPalette from "./styles/palette";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";

// {/* <Placeholder/> */}

function App() {
  const theme = createTheme({
    background: CustomPalette.background,
    text: "#fafafa",
    palette: {
      primary: {
        main: "#fafafa",
      },
    },
    typography: {
      fontFamily: ["'Poppins'", "'Helvetica'", "sans-serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* <div style={{ backgroundColor: theme.background, color: theme.text }}> */}
        <Container className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SiteHeader />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projects" element={<Projects />} />
              <Route path="work" element={<Experience />} />
            </Routes>
          </BrowserRouter>
        </Container>
        {/* <Projects /> */}
        <SiteFooter />

        {/* <Education /> */}
        {/* </div> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
