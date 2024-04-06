import styled, { css } from 'styled-components'

export const BackgroundContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 200px;
        padding-bottom: 10px;
        position:relative;
        top: -160px;
        
        display: flex;
        justify-content: center;
    `};
`;

export const Container = styled.div`
    ${({ theme}) => css`
        width: 100%;
        height: 100%;
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: center;
    `};
`;

export const Title = styled.p`
    ${({ theme}) => css`
        ${theme.textVariants.heading5};

        padding-bottom: 20px;
        text-align: center;
        min-width: max-content;
        position: relative;
    `};
`

export const TechsContainer = styled.div`

    ${({ theme }) => css`
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${theme.colors.contrast};

        padding: 10px 5%;
        border: 1px solid ${theme.colors.primary};
        border-radius: 50px;
    `};
`;

export const Divider = styled.a`
    ${({ theme }) => css`
        border-left: 1px solid ${theme.colors.primary};
        height: 20px;
    `};
`

export const TechNames = styled.a`
    ${({ theme}) => css`
        ${theme.textVariants.paragraph};
        min-width: max-content;
        position: relative;

        color: ${theme.colors.contrastSecondary};
    `};
`;
