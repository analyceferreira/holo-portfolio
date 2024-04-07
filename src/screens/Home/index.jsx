import React from 'react'

import Hero from '../../components/Hero'
import Menu from '../../components/Menu';
import Techs2 from '../../components/Techs2';
import About from '../../components/About';


export default function Home() {

  const techs = ['ReactJS', 'React Native', 'VueJS', 'NodeJS', 'Figma']

  return (
    <>
      <Menu />
      <Hero />
      <Techs2 data={techs} />
      <About />
    </>
  )
}
