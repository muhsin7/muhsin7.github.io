import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SiteHeader from './components/header/siteheader';
import './App.css';
import { Card, CardContent, CardHeader, Chip, createTheme, ThemeProvider } from '@mui/material';
import Projects from './components/projects/projects';
import Education from './components/education/education';

    // {/* <Placeholder/> */}

function App() {
  const theme = createTheme({
    background: '#212121',
    text: '#fafafa',
  })

  return (
    <React.Fragment >
      <ThemeProvider theme={theme}>
        {/* <div style={{ backgroundColor: theme.background, color: theme.text }}> */}
          <SiteHeader />
          <br />
          {/* <Projects /> */}

        
          <Education />
        {/* </div> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
