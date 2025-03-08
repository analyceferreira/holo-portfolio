import React, { useEffect } from 'react'

import { Container, SubTitle, TitleContainer, AboutContent, ImageContainer, ButtonsContainer } from './styles'
import { Content } from '../PageContent/styles'
import Spline from '@splinetool/react-spline';
import InfoContainer from './Components/InfoContainer';
import { useInView } from 'react-intersection-observer';
import { TitleSections } from '../../App/styles';



export default function About() {    
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [selected, setSelected] = React.useState('code')

  const handleChangeSelected = (selected: string) => {
    setSelected(selected)
  }
  
  return (
    <Content>
      <Container 
        id="about"
        className="about"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <TitleContainer>
          <TitleSections>Know About Me</TitleSections>
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