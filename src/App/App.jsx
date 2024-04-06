import React from 'react'
import GlobalStyle from '../styles/globalStyle.ts';

import Home from '../screens/Home/index.jsx';
import { BagImg1, BagImg2, BagImg3, BagImg4, BagImg5, Bg, Bg2, BgNoise, ContainerBg } from './styles.ts';


export default function App() {

  return (
    <>
      <ContainerBg>
        <BagImg1/>
        <BagImg2/>
        <BagImg3/>
        <BagImg4/>
        <BagImg5/>
      </ContainerBg>
      {/* <Bg/>
      <Bg2/> */}
      <BgNoise/>

      <Home />
      <GlobalStyle/>
    </>
  )
}
