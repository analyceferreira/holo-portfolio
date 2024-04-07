import styled, { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        color: ${props => props.theme.colors.contrast};      
    }

    body {
        font-family: ${props => props.theme.fontSizes}, sans-serif;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    #root {
        overflow-x: hidden;
    }

    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;  
        overflow-x: hidden;

    }

            
    #gradient-canvas {
        width:100%;
        height:100%;
        --gradient-color-1: #c2fffe; 
        --gradient-color-2: #fffdf0; 
        --gradient-color-3: #eae2ff;  
        --gradient-color-4: #dbdeff;
    }

    bgNoise {
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
    }

`