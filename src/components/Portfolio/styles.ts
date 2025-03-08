import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

export const PortfolioContainer = styled(motion.section)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 10px;
    margin-bottom: 100px;
  `};
`;

export const PortfolioHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
  `};
`;

export const PortfolioCards = styled.a`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    text-decoration: none;
    outline: none;

    border-radius: 5px;
    overflow: hidden;

    background: ${theme.colors.intensity100};
  `};
`;
export const PortfolioCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;

    background: ${theme.colors.intensity100};
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; /*5'*/
      mask-composite: exclude; /*5*/

      --border-angle: 0.85turn; // For animation.
      --main-bg: conic-gradient(
        from var(--border-angle),
        transparent,
        transparent 100%
      );

      border: solid 2px transparent;
      border-radius: 5px;
      --gradient-border: conic-gradient(
        from var(--border-angle),
        transparent 2%,
        #ced9ed,
        #cfc7fa,
        #988dbe,
        #efc8dd,
        #60a1d3 99%,
        transparent
      );

      background: var(--main-bg) padding-box, var(--gradient-border) border-box;

      background-position: center center;

      @keyframes bg-spin {
        to {
          --border-angle: 1.85turn;
        }
      }
      animation: bg-spin 3s linear infinite;
      animation-play-state: paused;

      @property --border-angle {
        syntax: "<angle>";
        inherits: true;
        initial-value: 0turn;
      }
    }
    &:hover:after {
      border: solid 2px transparent;
      animation-play-state: running;
    }
  `};
`;

export const PortfolioCardImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 90%;
    border-radius: 10px;
    object-fit: cover;
    object-size: 130%;

    &:hover {
      .port-techs {
        display: none;
      }
      .port-description {
        display: block;
      }
    }
  `};
`;

export const PortfolioCardTitle = styled.h3`
  ${({ theme }) => css`
    padding: 0 10px 10px;

    ${theme.textVariants.heading5};
    color: ${theme.colors.intensity800};

    display: flex;
    justify-content: space-between;
  `};
`;

export const PortfolioCardDescription = styled.p`
  display: none;
  ${({ theme }) => css`
    ${theme.textVariants.paragraph};
    color: ${theme.colors.intensity400};
    position: absolute;
  `};
`;

export const PortfolioCardTechs = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;
    padding: 10px;

    display: flex;
    align-items: start;
    justify-content: end;
    gap: 10px;
    background: ${theme.colors.primaryGradient};

    position: absolute;
    left: 0px;
    top: 0px;
  `};
`;

export const TechIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xs};
    align-items: center;

    img {
      width: 16px;
      height: 16px;
    }

    p {
      ${theme.textVariants.h5};
      color: ${theme.colors.secondary};
    }

    svg {
      fill: ${theme.colors.secondary};
      stroke: ${theme.colors.secondary};
      width: 16px;
      height: 16px;

      path {
        width: 10px;
        height: 10px;
      }
    }

    &:hover {
      svg {
        fill: ${theme.colors.intensity100};
        stroke: ${theme.colors.intensity100};
      }
    }
  `};
`;
