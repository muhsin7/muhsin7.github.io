import { Card, CardContent, makeStyles, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./experience.css";
import Footer from "../footer/sitefooter";
import ExperienceCard from "./experiencecard";

const theme = createTheme({
  palette: {
    background: {
      paper: "#0f084b", // your color
    },
  },
});

export default function Experience() {
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}
      <Container>
        <ExperienceCard
          position="Junior Software Engineer"
          company="Social AI Limited"
          location="London, UK"
          duration="Jun. 2022 - Present"
        />
        <ExperienceCard
          position="Deputy Head of Technology"
          company="King's Business Club, King's College London"
          location="London, UK"
          duration="Dec. 2021 - Present"
        />
        <ExperienceCard
          position="Website Developer"
          company="Momentum Magazine"
          location="Remote"
          duration="Apr 2020 - July 2021"
        />
        <ExperienceCard
          position="Software Development Intern"
          company="Cisco Systems"
          location="Bangalore, India"
          duration="Aug 2019 - Jan 2020"
        />
      </Container>
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}
