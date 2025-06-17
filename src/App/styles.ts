import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  overflow: hidden;
`;

export const ContainerBg = styled.div`
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

export const TitleSections = styled(motion.h1)`
  ${({ theme }) => css`
    width: max-content;
    ${theme.textVariants.h3};
    color: ${theme.colors.contrast};
    position: relative;

    @media (max-width: 480px) {
      ${theme.textVariants.h4};
    }

    &::before {
      content: "";
      background: url("src/assets./images/tl3.png");
      background-size: contain;
      background-repeat: no-repeat;
      width: 40px;
      height: 20px;
      position: absolute;
      bottom: -5px;
      right: -35px;

      font-size: 20px;

      color: ${theme.colors.contrastTertiary};
    }
  `};
`;

export const BagImg1 = styled.div`
  width: 2000px;
  height: 2000px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.3;
  top: -100vh;
  left: -80%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1500px;
    height: 1500px;
    top: -80vh;
    left: -240%;
    right: 0;
  }
`;

export const BagImg1Body = styled.div`
  width: 2000px;
  height: 2000px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.3;
  top: -100vh;
  left: -80%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1500px;
    height: 1500px;
    top: -80vh;
    left: -240%;
    right: 0;
  }
`;

export const BagImg2 = styled.div`
  width: 2000px;
  height: 2000px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("../images/pink.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.2;
  top: -200vh;
  left: 20%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1500px;
    height: 1500px;
    top: -10vh;
    left: 10%;
    opacity: 0.4;
  }
`;

export const BagImg2Body = styled.div`
  width: 2000px;
  height: 2000px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("../images/pink.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.1;
  top: -200vh;
  left: 20%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1500px;
    height: 1500px;
    top: -10vh;
    left: 10%;
    opacity: 0.4;
  }
`;

export const BagImg3 = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.5;
  top: 0%;
  left: 60%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -50vh;
    left: 40%;
  }
`;

export const BagImg3Body = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.1;
  top: 0%;
  left: 60%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -50vh;
    left: 40%;
  }
`;

export const BagImg4 = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/green.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.9;
  top: -180vh;
  left: 0%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -100vh;
    left: -20%;
    opacity: 0.3;
  }
`;

export const BagImg4Body = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/green.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.1;
  top: -180vh;
  left: 0%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -100vh;
    left: -20%;
    opacity: 0.3;
  }
`;

export const BagImg5 = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue2.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.6;
  top: 0%;
  left: 0%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -50vh;
    left: -20%;
  }
`;

export const BagImg5Body = styled.div`
  width: 1600px;
  height: 1600px;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/blue2.png");
  background-size: 110%;
  background-position: center;
  position: absolute;
  opacity: 0.1;
  top: 0%;
  left: 0%;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    width: 1200px;
    height: 1200px;
    top: -50vh;
    left: -20%;
  }
`;

export const Bg = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/bg.jpg");
  background-size: 100%;
  background-position: center;
  position: fixed;
  opacity: 0.1;
  top: 0%;
  left: 0;
  z-index: 0;
  mix-blend-mode: multiply;
`;

export const Bg2 = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/bg2.jpg");
  background-size: 110%;
  background-position: center;
  position: fixed;
  opacity: 0.5;
  top: 0%;
  left: 0;
  z-index: 0;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    top: -50vh;
    background-size: 120%;
  }
`;

export const BgNoise = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./images/noise-texture.jpg");
  background-size: 110%;
  background-position: center;
  position: fixed;
  opacity: 0.1;
  top: 0%;
  left: 0;
  z-index: 1;
  mix-blend-mode: multiply;

  @media (max-width: 768px) {
    top: -50vh;
    background-size: 120%;
  }
`;
