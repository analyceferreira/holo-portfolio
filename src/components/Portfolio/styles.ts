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
    width: 100%;
    height: 100%;
    text-decoration: none;
    outline: none;
    gap: 8rem;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 5px;

    @media (max-width: 768px) {
      gap: 3rem;
    }
  `};
`;

export const PortfolioCard = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2rem;
    border-radius: 10px;
    transition: transform 0.2s;
  `};
`;

export const PortfolioCardImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 700px;
    border-radius: 30px;
    object-fit: cover;
    background: linear-gradient(#293345 0%, rgba(29, 69, 106, 24%) 100%);

    animation: ${keyframes`
        0% {
            object-position: top;
        }
        50% {
           object-position: bottom;
        }
        100% {
           object-position: top;
        }
    `} 20s ease infinite;

    &:hover {
      animation-play-state: paused;
    }
  `};
`;

export const PortfolioBrowsersImages = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  `};
`;

interface BrowseImageProps {
  image?: string;
}

export const BrowseImage = styled.div<BrowseImageProps>`
  ${({ theme, image }) => css`
    margin: 0;
    padding: 0;
    box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
    position: relative;
    border-radius: 6px;
    display: flex;
    flex: 1;
    min-width: 300px;

    justify-content: center;
    align-items: center;

    background: url(${image}) no-repeat center center;
    background-size: cover;
    filter-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hidden;

    div {
      max-height: 50vh;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      filter-backdrop-filter: blur(2px);
      backdrop-filter: blur(20px);

      @media (max-width: 768px) {
        max-height: 25vh;
        min-height: 25vh;
      }
    }

    img {
      width: 100%;
      height: 100%;
      max-height: fit-content;
      object-fit: cover;
      border-radius: 0 0 6px 6px;
      cursor: pointer;
      animation: ${keyframes`
                    0% {
                        object-position: top;
                    }
                    50% {
                    object-position: bottom;
                    }
                    100% {
                    object-position: top;
                    }
                `} 30s ease infinite;

      &:hover {
        animation-play-state: paused;
      }
    }

    &::after {
      display: block;
      position: absolute;
      content: "";
      top: -1.25em;
      left: 1em;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #f44;
      cursor: pointer;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    }
  `};
`;

export const BrowseAction = styled.a`
  ${({ theme }) => css`
    position: absolute;
    content: "";
    top: -1.25em;
    left: 1em;
    width: 0.69em;
    height: 0.69em;
    border-radius: 50%;
    background-color: #f44;
    cursor: pointer;
  `};
`;

export const PortfolioCardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    align-items: center;
  `};
`;

export const PortfolioCardTitle = styled.h3`
  ${({ theme }) => css`
    width: 100%;

    ${theme.textVariants.h3};
    color: ${theme.colors.intensity800};

    display: flex;
    align-items: center;
    gap: 10px;
  `};
`;

export const PortfolioCardTags = styled.p`
  ${({ theme }) => css`
    display: flex;
    ${theme.textVariants.paragraph};
    color: ${theme.colors.intensity400};
    width: 100%;
    gap: 10px;
    opacity: 0.8;
    flex-wrap: wrap;

    span {
      padding: 6px 20px;
      border-radius: 20px;
      border: 1px solid ${theme.colors.intensity500};

      @media (max-width: 768px) {
        padding: 6px 14px;
        font-size: 0.9rem;
        width: fit-content;   
    }
  `};
`;
