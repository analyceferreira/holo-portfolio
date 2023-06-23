import React from 'react'
import GlobalStyle from '../../styles/globalStyle.ts';

import Hero from '../Hero'
import Menu from '../../components/Menu/index.tsx';
import { Container } from './styles.ts';
import BgTexture from './Components/BgTexture/index.jsx';


export default function App() {

  return (
    <Container>
      <Menu></Menu>
      <Hero></Hero>
      <GlobalStyle/>
      {/* <BgTexture/> */}
    </Container>
  )
}
