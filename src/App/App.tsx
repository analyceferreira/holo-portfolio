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
        <BagImg1 className="bg-1" />
        <BagImg2 />
        <BagImg3 />
        <BagImg4 />
        <BagImg5 />

        <BagImg2 style={{ top: "100vh" }} />
        <BagImg3 style={{ top: "100vh" }} />
        <BagImg4 style={{ top: "100vh" }} />
        <BagImg5 style={{ top: "40vh", left: "-250vw" }} />

        <BagImg1 style={{ top: "200vh" }} />
        <BagImg2 style={{ top: "200vh" }} />
        <BagImg3 style={{ top: "200vh" }} />
        <BagImg4 style={{ top: "200vh" }} />
        <BagImg5 style={{ top: "200vh" }} />

        <BagImg1 style={{ top: "300vh" }} />
        <BagImg2 style={{ top: "300vh" }} />
        <BagImg3 style={{ top: "300vh" }} />
        <BagImg4 style={{ top: "300vh" }} />
        <BagImg5 style={{ top: "300vh" }} />

        <BagImg1 style={{ top: "400vh" }} />
        <BagImg2 style={{ top: "400vh" }} />
        <BagImg3 style={{ top: "400vh" }} />
        <BagImg4 style={{ top: "400vh" }} />
        <BagImg5 style={{ top: "400vh" }} />

        <BagImg1 style={{ top: "500vh" }} />
        <BagImg2 style={{ top: "500vh" }} />
        <BagImg3 style={{ top: "500vh" }} />
        <BagImg4 style={{ top: "500vh" }} />
        <BagImg5 style={{ top: "500vh" }} />

        <BagImg1 style={{ top: "600vh" }} />
        <BagImg2 style={{ top: "600vh" }} />
        <BagImg3 style={{ top: "600vh" }} />
        <BagImg4 style={{ top: "600vh" }} />
        <BagImg5 style={{ top: "600vh" }} />
      </ContainerBg>
      <BgNoise />

      <Home />
      <GlobalStyle />
    </Container>
  );
}
