import React from "react";
import { Container } from "./styles";
import AboutDetatils from "../AboutDetatils";
import { GrGamepad, GrNode, GrReactjs } from "react-icons/gr";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import {
  BiDrink,
  BiLogoDocker,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoVuejs,
  BiMusic,
} from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { PiAirplaneTilt } from "react-icons/pi";

interface InfoContainerProps {
  selected: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ selected }) => {
  const experienceYear = new Date().getFullYear() - 2020;

  return (
    <Container>
      {selected === "code" && (
        <AboutDetatils
          title="Full Stack Developer"
          description={`Full Stack Developer with ${experienceYear}+ years of experience in web and mobile development. Passionate about learning new technologies and taking on challenging projects.`}
          techs={[
            { name: "Typescript", icon: <BiLogoTypescript /> },
            { name: "React", icon: <GrReactjs /> },
            { name: "Vue", icon: <BiLogoVuejs /> },
            { name: "Next", icon: <SiNextdotjs /> },
            { name: "Node", icon: <GrNode /> },
            { name: "Nest", icon: <SiNestjs /> },
            { name: "Postgres", icon: <SiPostgresql /> },
            { name: "Mysql", icon: <SiMysql /> },
            { name: "Docker", icon: <BiLogoDocker /> },
            { name: "Github", icon: <BiLogoGithub /> },
          ]}
        />
      )}
      {selected === "design" && (
        <AboutDetatils
          title="Designer"
          description="Constantly improving theoretical knowledge and staying updated with the latest design trends. Incorporating modern trends into projects to ensure they are attractive, impactful and contemporary."
          techs={[
            { name: "Figma", icon: <SiFigma /> },
            { name: "Photoshop", icon: <SiAdobephotoshop /> },
            { name: "Illustrator", icon: <SiAdobeillustrator /> },
          ]}
        />
      )}
      {selected === "personal" && (
        <AboutDetatils
          title="Personal"
          description="Passionate about challenges and continuous learning. Always seeking new knowledge and embracing new technologies."
          techs={[
            { name: "Books", icon: <GiBookshelf /> },
            { name: "Games", icon: <GrGamepad /> },
            { name: "Music", icon: <BiMusic /> },
            { name: "Series & Movies", icon: <RiMovie2Line /> },
            { name: "Travel", icon: <PiAirplaneTilt /> },
            { name: "Caipirinhas", icon: <BiDrink /> },
          ]}
        />
      )}
    </Container>
  );
};

export default InfoContainer;
