import styled, { css } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.primaryGradient};
  background-image: url("./src/assets/images/noise-texture.jpg");

  position: absolute;
  opacity: 0.5;
  z-index: 0;
  mix-blend-mode: multiply;
`;
