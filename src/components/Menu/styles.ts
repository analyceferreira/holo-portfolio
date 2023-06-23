import styled, { css } from 'styled-components'

export const BackgroundContainer = styled.div`
    ${({ theme }) => css`
        height: 70px;
        width: 100%;
        background: ${theme.colors.secondaryGradient};
        padding-bottom: 10px;
        
        display: flex;
        justify-content: center;
        position: fixed;
        z-index: 99;
    `};
`;


export const MenuContainer = styled.div`
    ${({ theme }) => css`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `};
`;

export const Logo = styled.h1`
    ${({ theme}) => css`
        width: 100%;
        ${theme.textVariants.h2};

        background-image: url("src/assets/images/texture2.jpg");
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `};
`;

export const MenuButton = styled.a`
    ${({ theme}) => css`
        ${theme.textVariants.paragraph};
        width: fit-content;
        min-width: max-content;

        position: relative;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.tertiary};
            font-weight: 600;
            letter-spacing: -.125px;
    
            &::after{
                content: '';
                background: ${theme.colors.contrastGradient};
                position: absolute;
                bottom: -5px;
                left: 50%;
	            transform: translatex(-50%);
                width: 100%;
                height: 2px;
                border-radius:50%;
            }
        }
    `};
`;


export const ContactButton = styled.button`
    ${({ theme}) => css`
        width: 100%;
        padding: 5px 10px;
        ${theme.textVariants.paragraph};

        border: 1px solid ${theme.colors.contrast};
        border-radius: 20px;
        background: none;
        cursor: pointer;

        
        &:hover {
            color: ${theme.colors.intensity100};
            background-color: ${theme.colors.tertiary};
        }
    `};
`;


export const ButtonsMenuContainer = styled.div`
    ${({ theme }) => css`
        width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    `};
`;