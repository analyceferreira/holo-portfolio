import React from "react";
import GlobalStyle from "../styles/globalStyle.js";

import Home from "../screens/Home/index";
import {
  BagImg1,
  BagImg2,
  BagImg3,
  BagImg4,
  BagImg5,
  BgNoise,
  Container,
  ContainerBg,
} from "./styles.js";

export default function App() {
  return (
    <Container>
      <ContainerBg>
        <BagImg1 />
        <BagImg2 />
        <BagImg3 />
        <BagImg4 />
        <BagImg5 />
      </ContainerBg>
      <BgNoise />

      <Home />
      <GlobalStyle />
    </Container>
  );
}
