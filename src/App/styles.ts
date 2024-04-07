import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    overflow: hidden;
`;


export const ContainerBg = styled.div`
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
`;



export const BagImg1 = styled.div`
    width: 2000px;
    height: 2000px;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/blue.png);
    background-size: 110%;
    background-position: center;
    position: absolute;
    opacity: 0.3;
    top: -100vh;
    left: -80%;
    z-index: 0;
    mix-blend-mode: multiply;
`;


export const BagImg2 = styled.div`
    width: 2000px;
    height: 2000px;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/pink.png);
    background-size: 110%;
    background-position: center;
    position: absolute;
    opacity: 0.2;
    top: -200vh;
    left: 20%;
    z-index: 0;
    mix-blend-mode: multiply;
`;

export const BagImg3 = styled.div`
    width: 1600px;
    height: 1600px;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/blue.png);
    background-size: 110%;
    background-position: center;
    position: absolute;
    opacity: 0.5;
    top: 0%;
    left: 60%;
    z-index: 0;
    mix-blend-mode: multiply;
`;


export const BagImg4 = styled.div`
    width: 1600px;
    height: 1600px;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/green.png);
    background-size: 110%;
    background-position: center;
    position: absolute;
    opacity: 0.9;
    top: -180vh;
    left: 0%;
    z-index: 0;
    mix-blend-mode: multiply;
`;



export const BagImg5 = styled.div`
    width: 1600px;
    height: 1600px;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/blue2.png);
    background-size: 110%;
    background-position: center;
    position: absolute;
    opacity: 0.6;
    top: 0%;
    left: 0%;
    z-index: 0;
    mix-blend-mode: multiply;
`;

export const Bg = styled.div`
    width: 100vw;
    height: 100%;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/bg.jpg);
    background-size: 100%;
    background-position: center;
    position: fixed;
    opacity: 0.1;
    top: 0%;
    left: 0;
    z-index: 0;
    mix-blend-mode: multiply;
`;

export const Bg2 = styled.div`
    width: 100vw;
    height: 100%;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/bg2.jpg);
    background-size: 110%;
    background-position: center;
    position: fixed;
    opacity: 0.5;
    top: 0%;
    left: 0;
    z-index: 0;
    mix-blend-mode: multiply;
`;


export const BgNoise = styled.div`
    width: 100vw;
    height: 100%;
    background: ${(props) => props.theme.colors.primaryGradient};
    background-image: url(/src/assets/images/noise-texture.jpg);
    background-size: 110%;
    background-position: center;
    position: fixed;
    opacity: 0.1;
    top: 0%;
    left: 0;
    z-index: 1;
    mix-blend-mode: multiply;
`;