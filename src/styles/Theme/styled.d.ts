import 'styled-components'

export interface ITextVariants {
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h1regular: string,
    h2regular: string,
    h3regular: string,
    h4regular: string,
    h5regular: string,
    button: string,
    smallButton: string,
    paragraph: string,
    largeParagraph: string,
    smallParagraph: string,
    xSmallParagraph: string,
    caption: string,
    smallCaption: string,
    input: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            contrast: string;
            contrastSecondary: string;

            intensity100: string;
            intensity200: string;
            intensity300: string;
            intensity400: string;
            intensity500: string;
            intensity600: string;
            intensity700: string;
            intensity800: string;
            intensity900: string;

            primaryGradient: string;
            secondaryGradient: string;
            contrastGradient: string;

            background: string;

            error: string;
            softError: string;
            success: string;
        };

        fontSizes: {
            xs: string;
            s: string;
            m: string;
            xm: string;
            l: string;
            xl: string;
            bgg: string;
        }

        spacings: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };

        shadows: {
            form: string;
            button: string;
            section: string;
            input: string;
            inputFocus: string;
            inputError: string;
        };

        textVariants: ITextVariants;
    }
}
