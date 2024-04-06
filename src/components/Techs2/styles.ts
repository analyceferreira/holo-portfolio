import { motion } from 'framer-motion';
import styled, { css } from 'styled-components'

export const Parallax = styled(motion.div)`
    ${({ theme, className }) => css`
        overflow: hidden;
        weight: 100vw;
        min-weight: 100vw;
        padding: 8px 0;
        position: relative !important;
        top: -20px;
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
        background: ${theme.colors.intensity100};
        opacity: 0.5;
        border-radius: 30px;
        transform: rotate(-1deg);

        ${className == 'parallax-top' && css`        
            z-index: 99;
            margin-top: 6px;
            z-index: 5;
        `};
    `};

    .scroller {
        ${({ theme }) => css`
            ${theme.textVariants.h5};
            color: ${theme.colors.error};
        `};
        text-transform: uppercase;
        font-size: 14px;
        opacity: 0.9;
        display: flex;
        align-items: center;
    }

    span {
        display: block;
        ${({ theme }) => css`
            color: ${theme.colors.contrast};
        `};
    }

`;


export const Separator = styled.div`
    width: 11px;
    height: 11px;
    margin: 2px 12px 0;
    background-image: url(/src/assets/images/star2.png);
    background-size: 110%;
    background-position: center;
    mix-blend-mode: multiply;
`;