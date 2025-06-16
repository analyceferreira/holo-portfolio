import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.spacings.content};
    width: 100%;
    height: 50%;
    z-index: 5;

    @media (max-width: ${theme.spacings.content}) {
      padding: 0 4%;
    }
  `};
`;
