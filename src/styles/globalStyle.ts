import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        color: ${props => props.theme.colors.contrast};      
    }

    #root {
        width: 100%;
        height: 100vh;
        background: ${(props) => props.theme.colors.primaryGradient};
    }
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }

            
    #gradient-canvas {
        width:100%;
        height:100%;
        --gradient-color-1: #c2fffe; 
        --gradient-color-2: #fffdf0; 
        --gradient-color-3: #eae2ff;  
        --gradient-color-4: #dbdeff;
    }
    


`