import { Button, SvgIcon } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./headerbutton.css";
import "../../../App.css";
import { motion } from "framer-motion";

class HeaderButton extends React.Component {
  render() {
    const Icon = this.props.icon;

    return (
      <Grid item>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href={this.props.link} target="_blank">
            <Button
              className="Button"
              style={{
                color: "white",
                backgroundColor: this.props.color,
                fontFamily: "Poppins",
                textTransform: "none",
              }}
            >
              {/* <SvgIcon color="primary" style={{ colorPrimary: "#000000" }} children={ icon.icon.path }></SvgIcon> */}
              <Icon></Icon>

              {/* <img style={{display: "flex", padding: 5}} height="20" src={"https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/" + this.props.icon + ".svg"} /> */}
              <div style={{ marginLeft: "5px" }}>{this.props.name}</div>
            </Button>
          </a>
        </motion.div>
      </Grid>
    );
  }
}

export default HeaderButton;
