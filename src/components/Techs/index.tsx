import React from 'react'

import { BackgroundContainer, TechsContainer, TechNames, Divider, Title, Container } from './styles'
import PageContent from '../PageContent/index'


export default function Techs({ data }) {

    const items = data.map((item, index) => {
        const a = index % 2
        if ((index + 1) < data.length) {
            return (
                <>
                    <TechNames>{item}</TechNames>
                    <Divider />
                </>
            )
        }
        else {
            return (
                <>
                    <TechNames>{item}</TechNames>
                </>
            )
        }
    })

    return (
        <BackgroundContainer >
            <PageContent>
                <Container>
                    {/* <Title>Technologies</Title> */}
                    <TechsContainer>
                        {items}
                    </TechsContainer>
                </Container>
            </PageContent>
        </BackgroundContainer>
    )
}
