import styled, { css } from 'styled-components'


export const Container = styled.div`
    height: 700px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    margin-top: 60px;
    padding: 0 100px 0 100px;
`;

export const TextContainer = styled.div`
    ${({ theme }) => css`
        max-width: min-content;
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 90px;
    `};
`;

export const TitleContainer = styled.div`
    ${({ theme }) => css`
        max-width: min-content;
        display: flex;
        align-items: flex-end;
    `};
`;

export const Title = styled.h1`
    ${({ theme}) => css`
        background-image: url("src/assets/images/texture2.jpg");
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        ${theme.textVariants.h1};
        line-height: 84px;
    `};
`;

export const SubTitle = styled.p`
    ${({ theme }) => css`
        ${theme.textVariants.heading3};
        color: ${theme.colors.primary};
    `};
`;