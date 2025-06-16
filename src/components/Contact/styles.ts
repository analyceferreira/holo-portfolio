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
    margin: 200px 0;
  `};
`;

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10vw;
  gap: 3vw;
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
    flex-direction: column;
    gap: 2vh;

    ${theme.textVariants.h3};
  `};
`;

export const RedesSociaisIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;

    * {
      display: flex;
      align-items: center;
      gap: 10px;
      underline: none;
      text-decoration: none;
      font-size: ${theme.fontSizes.l};
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
  background-color: ${(props) => props.theme.colors.primary};
  -webkit-mask-image: url(/assets/Group8.svg);
  mask-image: url("/assets/Group8.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  position: absolute;
  opacity: 0.2;
  top: 70px;
  left: 160px;
`;

export const ContactAsset2 = styled.div`
  width: 25px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.contrastTertiary};
  -webkit-mask-image: url(/assets/Group2.svg);
  mask-image: url("/assets/Group2.svg");
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
  background-color: ${(props) => props.theme.colors.primary};
  -webkit-mask-image: url(/assets/Group1.svg);
  mask-image: url("/assets/Group1.svg");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  z-index: -1;
  position: absolute;
  opacity: 0.2;
  top: 165px;
  left: -35px;
`;
