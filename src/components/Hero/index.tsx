import React from 'react'

import Face3D from './components/Face3D/Face3D'
import { Container, Title, SubTitle, TextContainer, TitleContainer } from './styles'
import { Content } from '../../components/PageContent/styles'



export default function Hero() {
  return (
    <Content>
      <Container >
        <Face3D></Face3D>
        <TextContainer>
          <TitleContainer>
            <Title>Analyce Ferreira</Title>
            <Title>.</Title>
          </TitleContainer>
          <SubTitle>&lt; desenvolvedora e UX/UI /&gt;</SubTitle>
        </TextContainer>
      </Container>
    </Content>
  )
}