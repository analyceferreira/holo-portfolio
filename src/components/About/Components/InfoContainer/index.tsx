import React from 'react';
import { Container } from './styles';
import AboutDetatils from '../AboutDetatils';
import { GrGamepad, GrNode, GrReactjs } from 'react-icons/gr';
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { BiDrink, BiLogoDocker, BiLogoGithub, BiLogoTypescript, BiLogoVuejs, BiMusic } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { GiBookshelf } from "react-icons/gi";
import { PiAirplaneTilt } from "react-icons/pi";

interface InfoContainerProps {
    selected: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ selected }) => {
    const expirienceYear = new Date().getFullYear() - 2020;
    
    return (
        <Container>
            {selected === 'code' && (
                <AboutDetatils 
                    title='Full Stack Developer'
                    description={`I am a full stack developer. I have been working with web and mobile development for ${expirienceYear} years and I am always looking for new challenges and learning new technologies.`}
                    techs={[
                        { name: 'Typescript', icon: <BiLogoTypescript /> },
                        { name: 'React', icon: <GrReactjs /> },
                        { name: 'Vue', icon: <BiLogoVuejs /> },
                        { name: 'Next', icon: <SiNextdotjs /> },
                        { name: 'Node', icon: <GrNode /> },
                        { name: 'Nest', icon: <SiNestjs /> },
                        { name: 'Postgres', icon: <SiPostgresql /> },
                        { name: 'Mysql', icon: <SiMysql /> },
                        { name: 'Docker', icon: <BiLogoDocker /> },
                        { name: 'Github', icon: <BiLogoGithub /> }
                    ]}
                />
            )}
            {selected === 'design' && (
                <AboutDetatils 
                    title='Designer'
                    description='I constantly try to improve my theoretical knowledge and keep up to date with the latest trends. I aim to incorporate these trends into the projects I develop, ensuring that they are modern, attractive and truly impactful.'
                    techs={[
                        { name: 'Figma', icon: <SiFigma /> },
                        { name: 'Photoshop', icon: <SiAdobephotoshop /> },
                        { name: 'Illustrator', icon: <SiAdobeillustrator />}
                    ]}
                />
            )}
            {selected === 'personal' && (
                <AboutDetatils 
                    title='Personal'
                    description='I am a person who loves challenges and is always looking for new knowledge. I am always looking for new challenges and learning new technologies.'
                    techs={[
                        { name: 'Books', icon: <GiBookshelf /> },
                        { name: 'Games', icon: <GrGamepad/> },
                        { name: 'Music', icon: <BiMusic /> },
                        { name: 'Series & Movies', icon: <RiMovie2Line /> },
                        { name: 'Travel', icon: <PiAirplaneTilt />
                    },
                        { name: 'Caipirinhas', icon: <BiDrink /> },
                    ]}
                />
            )}
      </Container>
    );
};

export default InfoContainer;