import React, { useEffect } from 'react'

import { Container, Title, SubTitle, TitleContainer, AboutContent, ImageContainer, ButtonsContainer } from './styles'
import { Content } from '../PageContent/styles'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import AboutDetatils from './Components/AboutDetatils';
import InfoContainer from './Components/InfoContainer';



export default function About() {
  const [selected, setSelected] = React.useState('code')

  const handleChangeSelected = (selected: string) => {
    setSelected(selected)
  }


  
  return (
    <Content>
      <Container>
        <TitleContainer>
          <Title>Know About Me</Title>
        </TitleContainer>
        <ButtonsContainer>
          <SubTitle
            onClick={() => handleChangeSelected('code')}
            className={selected === 'code' ? 'selected' : ''}
          >Code</SubTitle>
          <SubTitle
            onClick={() => handleChangeSelected('design')}
            className={selected === 'design' ? 'selected' : ''}
          >
            Designer</SubTitle>
          <SubTitle
            onClick={() => handleChangeSelected('personal')}
            className={selected === 'personal' ? 'selected' : ''}
          >Personal</SubTitle>
        </ButtonsContainer>

        <AboutContent>
          <ImageContainer>
            <Spline scene="https://prod.spline.design/ULChLSDjxFKAJuDa/scene.splinecode" />
          </ImageContainer>
          <InfoContainer selected={selected} />
        </AboutContent>
      </Container>
    </Content>
  )
}