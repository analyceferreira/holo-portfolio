import React, { useEffect, useState } from "react";

import Face3D from "./components/Face3D/Face3D";
import {
  Container,
  Title,
  SubTitle,
  TextContainer,
  TitleContainer,
  TitleBar,
} from "./styles";
import { Content } from "../../components/PageContent/styles";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const titleText = "Hi, I'm Analyce Ferreira";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < titleText.length - 1) {
        setTypedTitle((prevTitle) => prevTitle + titleText[currentIndex]);
        currentIndex++;
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Content id="hero">
      <Container>
        <Face3D></Face3D>
        <TextContainer>
          <TitleContainer>
            <Title>{titleText}</Title>
            <TitleBar
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              }}
              animate={{ opacity: [1, 0] }}
            >
              |
            </TitleBar>
          </TitleContainer>
          <SubTitle>&lt; Developer & UI Designer /&gt;</SubTitle>
        </TextContainer>
      </Container>
    </Content>
  );
}
