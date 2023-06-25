import React from 'react'

import Hero from '../../components/Hero'
import Menu from '../../components/Menu';
import Techs from '../../components/Techs';
import BgTexture from '../../components/BgTexture';
import { Container } from './styles.ts';


export default function Home() {

  const techs = ['ReactJS', 'React Native', 'VueJS', 'NodeJS', 'Figma']

  return (
    <Container>
      <Menu />
      <Hero />
      <Techs data={techs} />
      {/* <BgTexture/> */}
    </Container>
  )
}
