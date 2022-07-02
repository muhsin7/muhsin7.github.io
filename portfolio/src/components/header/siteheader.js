import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import HeaderButton from './headerbutton/headerbutton';
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import './siteheader.css';
import { useTheme } from '@emotion/react';

    // {/* <Placeholder/> */}

function Header() {
  const { siGithub, siLinkedin, siBookstack } = require('simple-icons/icons');

  return (
      <Container maxWidth='md' className="header">
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <h1>Muhsin Mohamed</h1>
          <h3>Computer Science student at King's College London</h3>  
        </Grid>
        <Grid item>
          <Grid container columnSpacing={2}>
            <HeaderButton icon={siGithub.slug} name="GitHub" color="purple" link="https://github.com/muhsin7"/>
            <HeaderButton icon={siLinkedin.slug} name="LinkedIn" color="blue" link="https://www.linkedin.com/in/muhsin-mohamed/"/>
            <HeaderButton icon={siBookstack.slug} name="Resume" color="grey" link="/RESUME.pdf"/>
          </Grid>
        </Grid>
      </Grid>
      </Container>
  );
}

export default Header;
