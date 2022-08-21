import * as React from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import HeaderButton from "./headerbutton/headerbutton";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import "./siteheader.css";
import { useTheme } from "@emotion/react";
import { AiOutlineGithub, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

// {/* <Placeholder/> */}

function Header() {
  return (
    <Container maxWidth="md" className="header">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Hi, I'm</Typography>
          <Typography variant="h2">Muhsin Mohamed</Typography>
          <Typography variant="h5">
            Computer Science student at King's College, London
          </Typography>
        </Grid>
        <Grid item>
          <Grid container columnSpacing={2}>
            <HeaderButton
              icon={AiFillGithub}
              name="GitHub"
              color="#6e5494"
              link="https://github.com/muhsin7"
            />
            <HeaderButton
              icon={AiFillLinkedin}
              name="LinkedIn"
              color="#0A66C2"
              link="https://www.linkedin.com/in/muhsin-mohamed/"
            />
            <HeaderButton
              icon={CgFileDocument}
              name="Resume"
              color="#26408B"
              link="/resume"
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
