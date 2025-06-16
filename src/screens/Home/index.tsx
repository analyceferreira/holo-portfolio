import React from "react";

import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Techs from "../../components/Techs";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";

export default function Home() {
  const techs = ["ReactJS", "React Native", "VueJS", "NodeJS", "Figma"];

  return (
    <>
      <Menu />
      <Hero />
      <Techs />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
