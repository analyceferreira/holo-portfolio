import { DefaultTheme } from "styled-components";
import pallet from "./pallet";
import fonts from "./fonts";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#6d8fd9",
    secondary: pallet.blue300,
    tertiary: pallet.blue400,

    contrast: pallet.blue900,
    contrastSecondary: pallet.white,
    contrastTertiary: "#4f46e5",
    contrastQuaternary: pallet.blue250,
    contrastSextary: pallet.yellow200,

    intensity100: pallet.violet100,
    intensity200: pallet.gray200,
    intensity300: pallet.gray300,
    intensity400: pallet.violet400,
    intensity500: pallet.gray500,
    intensity600: pallet.gray600,
    intensity700: pallet.blue600,
    intensity800: pallet.blue800,
    intensity900: pallet.blue900,

    primaryGradient:
      "linear-gradient(0deg, " +
      pallet.transparentViolet700Strong +
      " 50%, " +
      pallet.transparent +
      " 100%)",
    secondaryGradient:
      "linear-gradient(180deg, " +
      pallet.violet200 +
      " 0%, " +
      pallet.transparent +
      " 100%)",
    contrastGradient:
      "linear-gradient(90deg, " +
      pallet.blue400 +
      " 0%, " +
      pallet.violet300 +
      " 50%, " +
      pallet.blue250 +
      " 100%)",
    tertiaryGradient:
      "linear-gradient(0deg, " +
      pallet.yellow100 +
      " 50%, " +
      pallet.transparent +
      " 100%)",
    quartenaryGradient:
      "linear-gradient(180deg, " +
      pallet.yellow100 +
      " 20%, " +
      pallet.yellow200 +
      " 100%)",

    background: pallet.violet300,
    backgroundTransparent: pallet["violet300/80"],

    error: pallet.red,
    softError: pallet.softRed,
    success: pallet.green,
    transparent: pallet.transparent,
  },

  fontSizes: {
    xs: "10px",
    s: "12px",
    m: "14px",
    xm: "16px",
    l: "18px",
    xl: "20px",
    bgg: "32px",
  },

  spacings: {
    xs: "5px",
    s: "8px",
    m: "20px",
    l: "30px",
    xl: "60px",
    content: "1200px",
  },

  shadows: {
    form: "0px 4px 0px rgba(209, 209, 209, 0.25)",
    button: "0px 0px 3px -5px #475663",
    section:
      "0px 18px 80px rgba(171, 176, 192, 0.08), 0px 7.51997px 33.4221px rgba(171, 176, 192, 0.0575083), 0px 4.02054px 17.869px rgba(171, 176, 192, 0.0476886), 0px 2.25388px 10.0172px rgba(171, 176, 192, 0.04), 0px 1.19702px 5.32008px rgba(171, 176, 192, 0.0323114), 0px 0.498106px 2.21381px rgba(171, 176, 192, 0.0224916)",
    input: "0px 1px 0px rgba(148, 160, 180, 0.4)",
    inputFocus: pallet.yellow500,
    inputError: pallet.red,
  },

  textVariants: fonts.textVariants,

  fontFamilys: fonts.fontFamilys,
};
