import React from "react";
import GlobalStyle from "../styles/globalStyle.js";

import Home from "../screens/Home/index";
import {
  BagImg1,
  BagImg1Body,
  BagImg2,
  BagImg2Body,
  BagImg3,
  BagImg3Body,
  BagImg4,
  BagImg4Body,
  BagImg5,
  BagImg5Body,
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

        <BagImg2Body style={{ top: "100vh" }} />
        <BagImg3Body style={{ top: "100vh" }} />
        <BagImg4Body style={{ top: "100vh" }} />
        <BagImg5Body style={{ top: "40vh", left: "-250vw" }} />

        <BagImg1Body style={{ top: "200vh" }} />
        <BagImg2Body style={{ top: "200vh" }} />
        <BagImg3Body style={{ top: "200vh" }} />
        <BagImg4Body style={{ top: "200vh" }} />
        <BagImg5Body style={{ top: "200vh" }} />

        <BagImg1Body style={{ top: "300vh" }} />
        <BagImg2Body style={{ top: "300vh" }} />
        <BagImg3Body style={{ top: "300vh" }} />
        <BagImg4Body style={{ top: "300vh" }} />
        <BagImg5Body style={{ top: "300vh" }} />

        <BagImg1Body style={{ top: "400vh" }} />
        <BagImg2Body style={{ top: "400vh" }} />
        <BagImg3Body style={{ top: "400vh" }} />
        <BagImg4Body style={{ top: "400vh" }} />
        <BagImg5Body style={{ top: "400vh" }} />

        <BagImg1Body style={{ top: "500vh" }} />
        <BagImg2Body style={{ top: "500vh" }} />
        <BagImg3Body style={{ top: "500vh" }} />
        <BagImg4Body style={{ top: "500vh" }} />
        <BagImg5Body style={{ top: "500vh" }} />

        <BagImg1Body style={{ top: "600vh" }} />
        <BagImg2Body style={{ top: "600vh" }} />
        <BagImg3Body style={{ top: "600vh" }} />
        <BagImg4Body style={{ top: "600vh" }} />
        <BagImg5Body style={{ top: "600vh" }} />
      </ContainerBg>
      <BgNoise />

      <Home />
      <GlobalStyle />
    </Container>
  );
}
