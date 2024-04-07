import { ITextVariants } from "./styled";

const fontFamilys = {
    primary: 'Bricolage Grotesque',
    secondary: 'inter ',
    tertiary: 'roboto',
}

const sizes = {
    xs: '10px',
    s: '12px',
    m: '15px',
    xm: '18px',
    l: '26px',
    xl: '38px',
    xxl: '64px',
    xxxl: '68px',
}

const textVariants: ITextVariants = {
    h1:`font-family:` + fontFamilys.primary + `;
        font-weight: 500;
        font-size: ` + sizes.xxxl + `;
        letter-spacing: 0; `,
    h2:`font-family: ` + fontFamilys.primary +`; 
        font-weight: 700;
        font-size: ` + sizes.xxl + `;
        letter-spacing: 0;`,
    h3:`font-family: ` + fontFamilys.primary +`;
        font-weight: 700;
        font-size: ` + sizes.xl +`;
        letter-spacing: 0;`,
    h4:`font-family: ` + fontFamilys.primary +`;
        font-weight: 700;
        font-size: ` + sizes.l+`;
        letter-spacing: 0;`,
    h5:`font-family: ` + fontFamilys.primary +`;
        font-weight: 700;
        font-size: ` + sizes.xm +`;
        letter-spacing: 0;`,

    heading1: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.xxxl +`;
        letter-spacing: -1px;`,
    heading2: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 700;        
        font-size: ` + sizes.xxl +`;
        letter-spacing: -1px;`,
    heading3: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 300;        
        font-size: ` + sizes.l +`;
        letter-spacing: -1px;`,
    heading4: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;        
        font-size: ` + sizes.xm +`;
        letter-spacing: 0px;`,
    heading5: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;        
        font-size: ` + sizes.m +`;
        letter-spacing: 0;`,
                
    button:`font-family: ` + fontFamilys.primary +`;
        font-weight: 700;    
        font-size: ` + sizes.xm +`;
            letter-spacing: 0;`,
    smallButton:`font-family: ` + fontFamilys.primary +`;
        font-weight: 700;        
        font-size: ` + sizes.m +`;
        letter-spacing: 0;`,
    largeParagraph: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;        
        font-size: ` + sizes.xm +`;
        letter-spacing: 0;`,
    paragraph: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;        
        font-size: ` + sizes.m +`;
        letter-spacing: 0;`,
    smallParagraph:`font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;            
        font-size: ` + sizes.s +`;
            letter-spacing: 0;`,

    xSmallParagraph:`font-family: ` + fontFamilys.secondary +`;
        font-weight: 400;            
        font-size: ` + sizes.s +`;
                    letter-spacing: 0;`,
    caption:`font-family: ` + fontFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.s +`;
            letter-spacing: 0;`,
    smallCaption:`font-family: ` + fontFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.xs +`;
            letter-spacing: 0;`,
    input: `font-family: ` + fontFamilys.secondary +`;
        font-weight: 700;    
        font-size: ` + sizes.xm +`;
            letter-spacing: 0;`,
};

export default {textVariants, sizes, fontFamilys};