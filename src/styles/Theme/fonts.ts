import { ITextVariants } from "./styled";

const fonstFamilys = {
    principal: 'degular',
    secondary: 'Montserrat',
}

const sizes = {
    xs: '12px',
    s: '14px',
    m: '16px',
    xm: '18px',
    l: '24px',
    xl: '38px',
    bgg: '104px',
}

const textVariants: ITextVariants = {
    h1:`font-family:` + fonstFamilys.principal + `;
        font-weight: 700;
        font-size: ` + sizes.bgg + `;
        letter-spacing: 0; `,
    h2:`font-family: ` + fonstFamilys.principal +`; 
        font-weight: 700;
        font-size: ` + sizes.xl + `;
        letter-spacing: 0;`,
    h3:`font-family: ` + fonstFamilys.principal +`;
        font-weight: 700;
        font-size: ` + sizes.l +`;
        letter-spacing: 0;`,
    h4:`font-family: ` + fonstFamilys.principal +`;
        font-weight: 700;
        font-size: ` + sizes.xm +`;
        letter-spacing: 0;`,
    h5:`font-family: ` + fonstFamilys.principal +`;
        font-weight: 700;
        font-size: ` + sizes.m +`;
        letter-spacing: 0;`,

    heading1: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.bgg +`;
        letter-spacing: -1px;`,
    heading2: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.xl +`;
        letter-spacing: -1px;`,
    heading3: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.l +`;
        letter-spacing: -1px;`,
    heading4: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.xm +`;
        letter-spacing: -1px;`,
    heading5: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.m +`;
        letter-spacing: -1px;`,
                
    button:`font-family: ` + fonstFamilys.principal +`;
        font-weight: 700;    
        font-size: ` + sizes.xm +`;
            letter-spacing: 0;`,
    smallButton:`font-family: ` + fonstFamilys.principal +`;
        font-weight: 700;        
        font-size: ` + sizes.m +`;
        letter-spacing: 0;`,
    largeParagraph: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.xm +`;
        letter-spacing: 0;`,
    paragraph: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 500;        
        font-size: ` + sizes.s +`;
        letter-spacing: 0;`,
    smallParagraph:`font-family: ` + fonstFamilys.secondary +`;
        font-weight: 400;            
        font-size: ` + sizes.s +`;
            letter-spacing: 0;`,

    xSmallParagraph:`font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;            
        font-size: ` + sizes.s +`;
                    letter-spacing: 0;`,
    caption:`font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.s +`;
            letter-spacing: 0;`,
    smallCaption:`font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.xs +`;
            letter-spacing: 0;`,
    input: `font-family: ` + fonstFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.xm +`;
            letter-spacing: 0;`,
};

export default {textVariants, sizes, fonstFamilys};