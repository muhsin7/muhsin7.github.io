import React from 'react';
import { Container, Button, Chip, Card, CardHeader, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import './projects.css';


class Projects extends React.Component {

    render() {
        return <React.Fragment>
            <Container maxWidth="md">
                <h1>Projects</h1>
                <br/>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Card color='primary' style={{backgroundColor: "grey"}}>
                            <CardHeader title="Name"></CardHeader>
                            <CardContent>
                                <Chip label="Project 1" />
                                <Chip label="Project 2" />
                                <Chip label="Project 2" />
                                <Chip label="Project 2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    };
}

export default Projects;