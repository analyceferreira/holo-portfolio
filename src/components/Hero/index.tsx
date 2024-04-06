import React, { useEffect } from 'react'

import Face3D from './components/Face3D/Face3D'
import { Container, Title, SubTitle, TextContainer, TitleContainer, TitleBar } from './styles'
import { Content } from '../../components/PageContent/styles'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';



export default function Hero() {
  const baseText = "Dear Hiring Manager, " as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop();
  }, []);
  
  return (
    <Content>
      <Container 
        animate={{ scale: 1.1 }} 
        transition={{ duration: .3 }} 
      >
        <Face3D></Face3D>
        <TextContainer>
          <TitleContainer>
            <Title>Hi, I'm Analyce Ferreira</Title>
            <motion.span>{displayText}</motion.span>
            <TitleBar
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse"}}
              animate={{ opacity: [1, 0] }}
            >|</TitleBar>
          </TitleContainer>
          <SubTitle>&lt; Developer & UI Designer /&gt;</SubTitle>
        </TextContainer>
      </Container>
    </Content>
  )
}