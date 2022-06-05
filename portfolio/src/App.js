import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SiteHeader from './components/header/siteheader';
import './App.css';
import { Card, CardContent, CardHeader, Chip } from '@mui/material';
import Projects from './components/projects/projects';
import Education from './components/education/education';

    // {/* <Placeholder/> */}

function App() {
  return (
    <React.Fragment>
      <br />
      <br />
      <SiteHeader />
      <br />

      <Projects />

     
      <Education />
    </React.Fragment>
  );
}

export default App;
