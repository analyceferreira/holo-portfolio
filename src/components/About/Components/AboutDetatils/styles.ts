import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const DetatilsContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;

        gap: ${theme.spacings.s};
    `};
`;

export const Title = styled(motion.h1)`
    ${({ theme}) => css`
        width: max-content;
        ${theme.textVariants.h4};
        color: ${theme.colors.primary};
        position: relative;
    `};
`;

export const Description = styled(motion.p)`
    ${({ theme }) => css`
        ${theme.textVariants.largeParagraph};
        color: ${theme.colors.intensity600};
    `};
`;

export const TechsContainer = styled.div`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.l};
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacings.l};
    `};
`;

export const Tech = styled.div`
    ${({ theme }) => css`
        display: flex;
        gap: ${theme.spacings.xs};
        align-items: center;

        img {
            width: 50px;
            height: 50px;
        }

        p {
            ${theme.textVariants.h5};
            color: ${theme.colors.intensity500};
        }

        svg {
            fill: ${theme.colors.intensity500};
            stroke: ${theme.colors.intensity500};
            width: 30px;
            height: 30px;
            
            path {
                width: 10px;
                height: 10px;
            }
        }
    `};
`;
