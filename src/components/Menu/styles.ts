import styled, { css } from 'styled-components'

export const BackgroundContainer = styled.div`
    ${({ theme }) => css`
        height: 70px;
        width: 100%;
        padding-bottom: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 99;
    `};
`;


export const MenuContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `};
`;

export const Logo = styled.h1`
    ${({ theme}) => css`
        width: 100%;
        ${theme.textVariants.h5};

        background-image: url("src/assets/images/texture2.jpg");
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `};
`;

export const MenuButton = styled.a`
    ${({ theme}) => css`
        ${theme.textVariants.heading5};
        /* color: ${theme.colors.contrast}; */
        width: fit-content;
        min-width: max-content;

        position: relative;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.tertiary};
            /* letter-spacing: -.125px; */
    
            &::after{
                content: '';
                background: ${theme.colors.contrastGradient};
                position: absolute;
                bottom: -5px;
                left: 50%;
	            transform: translatex(-50%);
                width: 100%;
                height: 4px;
            }
        }
    `};
`;


export const ContactButton = styled.button`
    ${({ theme}) => css`
        width: 100%;
        padding: 5px 12px;
        ${theme.textVariants.heading5};

        border: none;
        border-radius: 20px;
        background: none;
        cursor: pointer;
        background-color: ${theme.colors.contrast};
        color: ${theme.colors.intensity100};

        
        &:hover {
            background-color: ${theme.colors.primary};
        }
    `};
`;


export const ButtonsMenuContainer = styled.div`
    ${({ theme }) => css`
        width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
    `};
`;