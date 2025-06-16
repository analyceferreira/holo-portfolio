import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  height: 600px;
  width: 100%;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  margin-top: 60px;
  padding: 20px 100px 0 0;
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    max-width: min-content;
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    right: -17%;
    top: -5%;

    @media (max-width: 1020px) {
      top: 0;
      right: 50%;
      transform: translateX(10%);
    }

    @media (max-width: 600px) {
      top: 0;
      transform: translateX(40%);
    }
  `};
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    max-width: min-content;
    display: flex;
    align-items: flex-end;
  `};
`;

export const Title = styled(motion.h1)`
  ${({ theme }) => css`
    ${theme.textVariants.h2};
    color: ${theme.colors.contrast};
    line-height: 70px;
  `};
`;

export const TitleBar = styled(motion.h1)`
  ${({ theme }) => css`
    ${theme.textVariants.h2};
    color: ${theme.colors.contrast};
    line-height: 80px;
  `};
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    ${theme.textVariants.heading4};
    width: max-content;
    padding: 5px 10px;
    background: ${theme.colors.intensity900};
    border-radius: 50px;
    border: 0.5px solid ${theme.colors.contrastSecondary};
    color: ${theme.colors.intensity100};
  `};
`;
