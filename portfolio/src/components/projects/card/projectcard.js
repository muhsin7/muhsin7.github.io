import React from "react";
import {
  Container,
  Button,
  Chip,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "./projectmodel";

class ProjectCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Card color="primary" style={{ backgroundColor: "grey" }}>
              <CardHeader title={this.props.data.name}></CardHeader>
              <CardContent>
                {this.props.data.tags.map((tag) => {
                  <Chip label={tag} />;
                })}
                {this.props.data.desc}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
