import * as React from 'react';

import SiteHeader from './components/header/siteheader';
import SiteFooter from './components/footer/sitefooter';

import './App.css';
import { createTheme, ThemeProvider, CssBaseline, GlobalStyles  } from '@mui/material';
import CustomPalette from './styles/palette';


    // {/* <Placeholder/> */}

function App() {
  const theme = createTheme ({
    background: CustomPalette.background,
    text: '#fafafa',
    typography: {
      fontFamily: [
        "'Poppins'", "'Helvetica'", "sans-serif"
      ].join(",")
    }
  })

  return (
    <React.Fragment >
      <ThemeProvider theme={theme}>
        {/* <div style={{ backgroundColor: theme.background, color: theme.text }}> */}
          <SiteHeader />
          <br />
          {/* <Projects /> */}
          <SiteFooter/>
        
          {/* <Education /> */}
        {/* </div> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
