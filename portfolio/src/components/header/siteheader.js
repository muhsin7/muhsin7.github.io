import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import HeaderButton from './headerbutton/headerbutton';
import { Button } from '@mui/material';

    // {/* <Placeholder/> */}

function App() {
  const { siSimpleicons } = require('simple-icons/icons');

  return (
    <React.Fragment>
      <Container fixed maxWidth='md'>
      <h1>Muhsin Mohamed</h1>
      <h3>Computer Science student at King's College London</h3>
      <HeaderButton icon={siSimpleicons.slug} name="Github"/>
      <HeaderButton icon={siSimpleicons.slug} name="Github"/>
      <HeaderButton icon={siSimpleicons.slug} name="Resume"/>
      </Container>
    </React.Fragment>
  );
}

export default App;
