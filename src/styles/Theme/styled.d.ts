import "styled-components";

export interface IFontFamilys {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface ITextVariants {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  heading1: string;
  heading2: string;
  heading3: string;
  heading4: string;
  heading5: string;
  button: string;
  smallButton: string;
  paragraph: string;
  largeParagraph: string;
  smallParagraph: string;
  xSmallParagraph: string;
  caption: string;
  smallCaption: string;
  input: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      contrast: string;
      contrastSecondary: string;
      contrastTertiary: string;
      contrastQuaternary: string;
      contrastSextary: string;

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
      tertiaryGradient: string;
      quartenaryGradient: string;

      background: string;
      backgroundTransparent: string;

      error: string;
      softError: string;
      success: string;
      transparent: string;
    };

    fontSizes: {
      xs: string;
      s: string;
      m: string;
      xm: string;
      l: string;
      xl: string;
      bgg: string;
    };

    spacings: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      content: string;
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

    fontFamilys: IFontFamilys;
  }
}
