import * as React from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import { Container, IconButton, Box, Typography } from "@mui/material";
import "./sitefooter.css";
import CustomPalette from "../../styles/palette";
import { useTheme } from "@emotion/react";
import { AiOutlineGithub, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import "../../App.css";

// {/* <Placeholder/> */}

function Footer() {
  return (
    <React.Fragment>
      <footer style={{ backgroundColor: "#0F084B" }}>
        <Box sx={{ justifyContent: "space-between", display: "flex", p: 2 }}>
          <Container maxWidth="lg" sx={{ display: "flex" }}>
            <Grid
              container
              spacing={0}
              direction="column"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <Typography variant="caption">
                  © 2022 Muhsin Mohamed. All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container
            sx={{ justifyContent: "flex-end", display: "flex", pr: 5 }}
          >
            {buildFooterButton(AiFillGithub)}
            {buildFooterButton(AiFillLinkedin)}
            {buildFooterButton(CgFileDocument)}
          </Container>
        </Box>
      </footer>
    </React.Fragment>
  );
}

function buildFooterButton(IconComp) {
  return (
    <Box sx={{ p: 1 }}>
      <IconContext.Provider value={{ color: "white" }}>
        <IconButton>
          <IconComp />
        </IconButton>
      </IconContext.Provider>
    </Box>
  );
}

export default Footer;
