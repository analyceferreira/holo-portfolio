import React from "react";
import { FooterContainer } from "./styles";
import { Content } from "../PageContent/styles";

const FooterSection: React.FC = () => {
  return (
    <Content id="contact" style={{ padding: 0, maxWidth: "100%" }}>
      <FooterContainer>
        Designed and developed by
        <a
          href="https://www.linkedin.com/in/analyceferreiradapont/"
          target="_blank"
        >
          Analyce Ferreira Dapont
        </a>{" "}
        | All rights reserved © {new Date().getFullYear()}
      </FooterContainer>
    </Content>
  );
};

export default FooterSection;
