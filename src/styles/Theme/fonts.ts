import { ITextVariants } from "./styled";

const types = {
    superTitleBold:     'Poppins_700Bold',
    superTitleSemiBold: 'Poppins_600SemiBold',
    superTitleRegular:  'Poppins_400Regular',
    titleBold:          'Inter_700Bold',
    titleSemiBold:      'Inter_600SemiBold',
    titleRegular:       'Inter_400Regular',
    paragraphMedium:    'Roboto_500Medium',
    paragraphRegular:   'Roboto_400Regular',
}

const sizes = {
    xs: '10px',
    s: '12px',
    m: '14px',
    xm: '16px',
    l: '18px',
    xl: '20px',
    bgg: '32px',
}

const textVariants: ITextVariants = {
    h1:`fontFamily:` + types.superTitleSemiBold + `;
        fontSize: ` + sizes.bgg + `;
        letter-spacing: -.2px`,
    h2:`fontFamily: ` + types.superTitleSemiBold +`
        fontSize: ` + sizes.xl + `;
        letter-spacing: -.2px`,
    h3:`fontFamily: ` + types.superTitleSemiBold +`;
        fontSize: ` + sizes.l +`;
        letter-spacing: -.2px`,
    h4:`fontFamily: ` + types.superTitleSemiBold +`;
        fontSize: ` + sizes.xm +`;
        letter-spacing: -.2px`,
    h5:`fontFamily: ` + types.superTitleSemiBold +`;
        fontSize: ` + sizes.m +`;
        letter-spacing: -.2px`,

    h1regular: `fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.bgg +`;
                letter-spacing: -.2px;`,
    h2regular: `fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.xl +`;
                letter-spacing: -.2px;`,
    h3regular: `fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.l +`;
                letter-spacing: -.2px;`,
    h4regular: `fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.xm +`;
                letter-spacing: -.2px;`,
    h5regular: `fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.m +`;
                letter-spacing: -.2px;`,
                
    button:`fontFamily: ` + types.superTitleRegular +`;
            fontSize: ` + sizes.xm +`;
            letter-spacing: -.2px`,
    smallButton:`fontFamily: ` + types.superTitleRegular +`;
                fontSize: ` + sizes.m +`;
                letter-spacing: -.2px;`,
    largeParagraph: `fontFamily: ` + types.titleRegular +`;
                fontSize: ` + sizes.xm +`;
                letter-spacing: -.2px;`,
    paragraph: `fontFamily: ` + types.titleRegular +`;
                fontSize: ` + sizes.m +`;
                letter-spacing: -.2px;`,
    smallParagraph:`fontFamily: ` + types.titleRegular +`;
                    fontSize: ` + sizes.s +`;
                    letter-spacing: -.2px;`,

    xSmallParagraph:`fontFamily: ` + types.titleRegular +`;
                    fontSize: ` + sizes.s +`;
                    letter-spacing: -.2px`,
    caption:`fontFamily: ` + types.superTitleSemiBold +`;
            fontSize: ` + sizes.s +`;
            letter-spacing: -.2px`,
    smallCaption:`fontFamily: ` + types.superTitleSemiBold +`;
            fontSize: ` + sizes.xs +`;
            letter-spacing: -.2px`,
    input: `fontFamily: ` + types.paragraphRegular +`;
            fontSize: ` + sizes.xm +`;
            letter-spacing: -.2px`,
};

export default {textVariants, sizes, types};