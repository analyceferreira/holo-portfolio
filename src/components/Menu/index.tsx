import React from 'react'

import { BackgroundContainer, ButtonsMenuContainer, ContactButton, Logo, MenuButton, MenuContainer } from './styles'
import PageContent from '../PageContent/index'


export default function Menu() {

    return (
        <BackgroundContainer >
            <PageContent>
                <MenuContainer>
                    <Logo>Ana.</Logo>

                    <ButtonsMenuContainer>
                        <MenuButton>Home</MenuButton>
                        <MenuButton>Coisas de Ana</MenuButton>
                        <MenuButton>Home</MenuButton>
                        <MenuButton>Home</MenuButton>
                        <ContactButton>Contato</ContactButton>
                    </ButtonsMenuContainer>
                </MenuContainer>
            </PageContent>
        </BackgroundContainer>
    )
}
