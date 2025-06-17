import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const FooterContainer = styled(motion.section)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    font-family: ${theme.fontFamilys.secondary};

    background: ${theme.colors.quartenaryGradient};

    @media (max-width: 768px) {
      padding: 20px 0;
      flex-wrap: wrap;
    }
  `};
`;
