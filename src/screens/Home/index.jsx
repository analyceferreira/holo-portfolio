import React from 'react'

import Hero from '../../components/Hero'
import Menu from '../../components/Menu';
import BgTexture from '../../components/BgTexture';
import { Container } from './styles.ts';


export default function Home() {

  return (
    <Container>
      <Menu></Menu>
      <Hero></Hero>
      {/* <BgTexture/> */}
    </Container>
  )
}
