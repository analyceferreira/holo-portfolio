import styled, { css } from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 450px;
    background-color: ${({theme})=>theme.colors.success };
    position: relative;
`
export const SceneContainer  =  styled.div`
    height: 500px;
`
export const Name = styled.h1`
    ${({ theme,  color }) => css`
        font-size: 96px; 
        padding: 0;
        margin: 0; 
        position: absolute;
        left: 0;
        top: 0;
    `};
`