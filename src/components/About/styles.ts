import { motion } from 'framer-motion';
import styled, { css } from 'styled-components'


export const Container = styled(motion.section)`
    position: relative;
    height: 600px;
    width: 100%;
    margin-top: 15%;
    margin-bottom: 15%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7%;

`;

export const TitleContainer = styled.div`
    ${({ theme }) => css`
        max-width: min-content;
        display: flex;
        gap: 14px;
    `};
`;

export const ButtonsContainer = styled.div`
    ${({ theme }) => css`
        width: 500px;
        height: 40px;
        padding: 1px;

        display: flex;
        justify-content: space-between;
        position: relative;
        cursor: pointer;

        background: rgba(129,133,187, .2);
        border-radius: 10px;
        border: .5px solid ${theme.colors.intensity300};
        transition: 0.5s ease-in-out;
    `};
`;


export const SubTitle = styled.p`
    ${({ theme }) => css`
        ${theme.textVariants.heading4};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        color: ${theme.colors.contrast};
        font-weight: 400;

        transition: 0.3s ease-in-out;


        &.selected {
            background: ${theme.colors.contrast};
            color: ${theme.colors.primary};
        }


        &:hover {
            background: ${theme.colors.contrastTertiary};
            color: ${theme.colors.intensity400};
        }

        &.selected:last-child, :hover:last-child {
            border-radius: 0 10.5px 10.5px 0;
        }
        &.selected:first-child, :hover:first-child {
            border-radius: 10.5px 0 0 10.5px;
        }
    `};
`;

export const AboutContent = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        padding: 3px;

        display: flex;
        justify-content: center;
        position: relative;
        gap: 8%;
    `};
`;


export const ImageContainer = styled.div`
    ${({ theme }) => css`

        width: 350px;
        height: 400px;
        ${theme.textVariants.paragraph};
        background: url("src/assets/images/bg8.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        
        border-radius: 280px 0 280px 0;

        & p {
            color: ${theme.colors.intensity100};
        }
    `};
`;
