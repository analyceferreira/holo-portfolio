import React from "react";
import {
  ContactAsset,
  ContactAsset2,
  ContactAsset3,
  ContactContainer,
  ContactContent,
  ContactMessage,
  ContactText,
  RedesSociaisIcons,
} from "./styles";
import { Content } from "../PageContent/styles";
import { FaLinkedinIn, FaSquarePhone, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGithub } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";

const ContactSection: React.FC = () => {
  return (
    <Content id="contact" style={{ padding: 0, maxWidth: "100%" }}>
      <ContactContainer>
        <ContactContent>
          <ContactText>
            <ContactAsset />
            <ContactAsset2 />
            <ContactAsset3 />
            <ContactMessage>
              <p>Whant to start a project?</p>
            </ContactMessage>
          </ContactText>

          <RedesSociaisIcons>
            <a href="https://www.linkedin.com/in/analyceferreiradapont/">
              <FaLinkedinIn />
              Analyce Ferreira Dapont
            </a>
            <a href="https://github.com/analyceferreira">
              <BiLogoGithub />
              github.com/analyceferreira
            </a>
            <a href="tel:+5566984115450">
              <FaSquarePhone />
              +55 (66) 9 8411-5450
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5566984115450">
              <FaWhatsapp />
              +55 (66) 9 8411-5450
            </a>
            <a href="">
              <TbMailFilled />
              <a href="mail:contato@analyceferreira.com.br">
                contato@analyceferreira.com.br
              </a>
            </a>
          </RedesSociaisIcons>
        </ContactContent>
      </ContactContainer>
    </Content>
  );
};

export default ContactSection;
