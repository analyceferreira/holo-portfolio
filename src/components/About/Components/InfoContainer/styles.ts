import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 40%;
    ${theme.textVariants.paragraph};
    color: ${theme.colors.intensity100};

    @media (max-width: 768px) {
      max-width: 100%;
    }
  `};
`;
