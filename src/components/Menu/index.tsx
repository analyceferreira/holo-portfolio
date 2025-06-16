import React from "react";

import {
  BackgroundContainer,
  ButtonsMenuContainer,
  ContactButton,
  Logo,
  MenuButton,
  MenuContainer,
} from "./styles";
import PageContent from "../PageContent/index";

export default function Menu() {
  return (
    <BackgroundContainer>
      <PageContent>
        <MenuContainer>
          <Logo>Ana.</Logo>

          <ButtonsMenuContainer>
            <MenuButton
              onClick={() => {
                document
                  .querySelector("#hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </MenuButton>
            <MenuButton
              onClick={() => {
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
            </MenuButton>
            <MenuButton
              onClick={() => {
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Portfólio
            </MenuButton>
            {/* <MenuButton>Game</MenuButton> */}
            <ContactButton
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contato
            </ContactButton>
          </ButtonsMenuContainer>
        </MenuContainer>
      </PageContent>
    </BackgroundContainer>
  );
}
