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
        scroll-behavior: smooth;
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
    

    .animate-gradient__rotate i {
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        padding: 1.5px;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .2s;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        border-radius:inherit
    }

    .animate-gradient__rotate:hover i:before {
        opacity: 1;
        animation:hover-spin__animation 5s linear infinite
    }

    .animate-gradient__rotate i:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        border-radius: 9999px;
        opacity: 0;
        background: conic-gradient(from 180deg at 50% 50%, #ffc8752c 0deg, #ffeaca 10deg, #ffc875 25deg, #a787ff 112.5deg, #66e3ff 203.75deg, #d2f7ff 213.75deg, #66e3ff 228.75deg, rgba(42, 138, 246, 0) 1turn);
        width: calc(100% * 2);
        padding-bottom: calc(100% * 2);
        transform: translate(-50%, -50%);
        z-index: -1;
        will-change:transform
    }

    .animate-gradient__activeXs.animate-gradient__rotate i:before {
        opacity:1
    }

    @media (min-width: 1024px) {
        .animate-gradient__activeXs.animate-gradient__rotate i:before {
            opacity:0
        }
    }

    .animate-gradient__activeXs.animate-gradient__rotate i:before {
        animation:hover-spin__animation 5s linear infinite
    }

    .animate-gradient__activeXs.animate-gradient__rotate:hover i:before {
        opacity: 1;
        animation:hover-spin__animation 5s linear infinite
    }

    @keyframes hover-spin__animation {
        0% {
            transform:translate(-50%, -50%) rotate(1turn)
        }

        to {
            transform:translate(-50%, -50%) rotate(0)
        }
    }

    .animated-colors__gradient, .colors__gradient {
        will-change: transform;
        background-image:radial-gradient(66.11% 66.11% at 50% 33.89%, hsla(0, 0%, 100%, .4) 0, hsla(0, 0%, 100%, 0) 100%), linear-gradient(278.88deg, #fff, #66e3ff 28.83%, #a787ff 56.31%, #ffc875 86.49%)
    }

    .animated-colors__gradient {
        background-size: 200% 200%;
        animation:animate-colors__gradient 10s ease infinite
    }

    @keyframes animate-colors__gradient {
        0% {
            background-position:0 50%
        }

        50% {
            background-position:100% 50%
        }

        to {
            background-position:0 50%
        }
    }


`