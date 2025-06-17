import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ContactContainer = styled(motion.section)`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 200px 0 150px;

    background: ${theme.colors.tertiaryGradient};

    @media (max-width: 768px) {
      padding: 80px 0 100px;
    }
  `};
`;

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.spacings.content};
  padding: 0 10vw;
  gap: 3vw;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16vw;
  }
`;

export const ContactText = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

export const ContactMessage = styled.div`
  ${({ theme }) => css`
    width: 70%;
    max-width: 370px;
    flex-direction: column;
    gap: 2vh;
    z-index: 1;

    ${theme.textVariants.h3};

    @media (max-width: 768px) {
      width: 100%;
    }
  `};
`;

export const RedesSociaisIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;
    row-gap: 10px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    * {
      display: flex;
      align-items: center;
      gap: 10px;
      underline: none;
      text-decoration: none;
      font-size: ${theme.fontSizes.xm};
      font-family: ${theme.fontFamilys.secondary};
    }

    svg {
      font-size: 20px;
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        fill: ${theme.colors.contrastQuaternary};
        color: ${theme.colors.contrastQuaternary};

        * {
          color: ${theme.colors.contrastQuaternary};
        }
      }
    }
  `};
`;

export const ContactAsset = styled.div`
  width: 115px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.contrastSecondary};
  -webkit-mask-image: url("./assets/Group8.svg");
  mask-image: url("./assets/Group8.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  position: absolute;
  top: 70px;
  left: 160px;
`;

export const ContactAsset2 = styled.div`
  width: 25px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  -webkit-mask-image: url("./assets/Group2.svg");
  mask-image: url("./assets/Group2.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  position: absolute;
  top: 0px;
  left: 260px;
`;

export const ContactAsset3 = styled.div`
  width: 70px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.contrastSecondary};
  -webkit-mask-image: url("./assets/Group1.svg");
  mask-image: url("./assets/Group1.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  z-index: 0;
  position: absolute;
  top: 165px;
  left: -35px;
`;
