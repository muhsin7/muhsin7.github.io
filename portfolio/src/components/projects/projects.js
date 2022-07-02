import React from 'react';
import { Container, Button, Chip, Card, CardHeader, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import './projects.css';
import '../../data/projects.json';
import './card/projectcard';
import './card/projectmodel';


class Projects extends React.Component {

    render() {
        var data = JSON.parse(
            `
                "name": "Search-m8",
                "tags": ["Flask", "Python", "NodeJS"],
                "desc": "Summarizes articles and videos based search terms using natural language processing"
            `
        )

        return <React.Fragment>
            <Container maxWidth="md">
                <h1>Projects</h1>
                <br/>
                <Grid container spacing={4}>
                    {/* <ProjectCard data={data} /> */}
                </Grid>
            </Container>
        </React.Fragment>
    };
}

export default Projects;