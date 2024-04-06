import React from 'react'

import Hero from '../../components/Hero'
import Menu from '../../components/Menu';
import Techs from '../../components/Techs';
import Techs2 from '../../components/Techs2';
import BgTexture from '../../components/BgTexture';
import { Container } from './styles.ts';


export default function Home() {

  const techs = ['ReactJS', 'React Native', 'VueJS', 'NodeJS', 'Figma']

  return (
    <Container>
      <Menu />
      <Hero />
      <Techs2 data={techs} />
      {/* <Techs data={techs} /> */}
      {/* <BgTexture/> */}
    </Container>
  )
}
