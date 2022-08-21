import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import {
  AiFillAccountBook,
  AiOutlineArrowsAlt,
  AiOutlineDownload,
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";
import { Document, pdfjs } from "react-pdf";
import Footer from "../footer/sitefooter";
import HeaderButton from "../header/headerbutton/headerbutton";
import ResumePDF from "./RESUME.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={4}>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <Grid item>
                <DownloadButton
                  icon={AiOutlineDownload}
                  name="Download"
                  color="#0F084B"
                  link="/RESUME.pdf"
                />
              </Grid>
              <Grid item>
                <HeaderButton
                  icon={AiOutlineMail}
                  name="Email"
                  color="#0F084B"
                  link="https://www.linkedin.com/in/muhsin-mohamed/"
                />
              </Grid>
              <Grid item>
                <HeaderButton
                  icon={AiOutlineArrowsAlt}
                  name="Full screen"
                  color="#0F084B"
                  link="RESUME.pdf"
                />
              </Grid>
            </Box>
            {/* <Document file="RESUME.pdf"></Document> */}
          </Container>
          <embed src="/RESUME.pdf" height="550" width="400"></embed>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

class DownloadButton extends React.Component {
  render() {
    const Icon = this.props.icon;

    return (
      <React.Fragment>
        <Grid item>
          <a href={this.props.link} target="_blank" download>
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
        </Grid>
      </React.Fragment>
    );
  }
}

export default Resume;
