import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${props => props.theme.colors.error};      
    }
    h1 {
        color: ${props => props.theme.colors.error};
        font-family:"degular", sans-serif ;
    }
    .accent {
        background-color: ${props => props.theme.colors.error};
        color: ${props => props.theme.colors.error};
        height: 30px;
    }
`