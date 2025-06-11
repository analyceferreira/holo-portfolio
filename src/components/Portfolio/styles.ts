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
    gap: 8REM;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 5px;

    @media (max-width: 768px) {
        gap: 3REM;
        }
  `};
`;

export const PortfolioCard = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2REM;
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
        gap: 2REM;
        justify-content: center;


    `};
    `;

export const BrowseImage = styled.div`
    ${({ theme }) => css`
            border-top: 2em solid rgba(230, 230, 230, 0.7);
            box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
            position: relative;
            border-radius: 3px 3px 0 0;
            max-height: 10%;

            div {
                max-height: 100vh;
                width: 100%;
                background: linear-gradient(0deg, #fff, #f2f2f2);
                overflow: scroll;
            }

           img {
            width: 100%; 
            object-fit: cover;
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
            
            &:before {
                display: block;
                position: absolute;
                content: '';
                top: -1.25em;
                left: 1em;
                width: 0.5em;
                height: 0.5em;
                border-radius: 50%;
                background-color: #f44;
                box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
            }

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
    justify-content: space-between;
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

    span {
        padding: 6px 20px;
        border-radius: 20px;
        border: 1px solid ${theme.colors.intensity500};
    }
  `};
`;

