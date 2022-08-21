import {
  Box,
  Card,
  CardContent,
  Icon,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./experience.css";
import { GoLocation } from "react-icons/go";

export default function ExperienceCard(props) {
  return (
    <Container>
      <Card sx={{ borderRadius: "15px", m: "2em" }}>
        <CardContent className="experienceCard">
          <Container>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              {props.position}
            </Typography>
            <Box sx={{ justifyContent: "space-between", display: "flex" }}>
              <Box>
                <Typography variant="h6">{props.company}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">{props.duration}</Typography>
              </Box>
            </Box>
            <Typography variant="h6" alignItems="center" display="flex">
              <GoLocation></GoLocation> &nbsp;
              {props.location}
            </Typography>
            <Typography variant="caption">
              <List>
                <ListItem sx={{ display: "list-item", px: 0, pb: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada maximus justo, at aliquet dolor rutrum quis.
                </ListItem>
                <ListItem sx={{ display: "list-item", px: 0, pb: 0 }}>
                  Aliquam auctor eget erat sollicitudin sollicitudin.
                </ListItem>
                <ListItem sx={{ display: "list-item", px: 0, pb: 0 }}>
                  {" "}
                  Donec facilisis risus vel consectetur congue. Fusce aliquet
                  arcu ut purus efficitur, eu condimentum quam sollicitudin
                </ListItem>
                <ListItem sx={{ display: "list-item", px: 0, pb: 0 }}>
                  Vivamus non felis nec lorem mollis vulputate. Phasellus non
                  aliquet neque, quis sollicitudin nunc.
                </ListItem>
              </List>{" "}
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}
