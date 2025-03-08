import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, TitleSections } from '../../App/styles';
import { PortfolioContainer, PortfolioCard, PortfolioCardDescription, PortfolioCardImage, PortfolioCardTitle, TechIcon, PortfolioCardTechs, PortfolioHeader, PortfolioCards } from './styles';
import portfolio1 from '/src/assets/portfolio-assets/bv.png';
import portfolio2 from '/src/assets/images/3.jpg';
import portfolio3 from '/src/assets/images/3.jpg';
import { GrNode, GrReactjs } from 'react-icons/gr';
import { BiLogoDocker, BiLogoGithub, BiLogoTypescript, BiLogoVuejs } from 'react-icons/bi';
import { SiMysql, SiNestjs, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { Content } from '../PageContent/styles';

const TechsIcons: { [key: string]: JSX.Element } = {
    React: <GrReactjs />,
    Node:  <GrNode />,
    Typescript: <BiLogoTypescript />,
    Vue: <BiLogoVuejs /> ,
    Next: <SiNextdotjs /> ,
    Nest: <SiNestjs /> ,
    Postgres: <SiPostgresql /> ,
    Mysql: <SiMysql /> ,
    Docker: <BiLogoDocker /> ,
    Github: <BiLogoGithub />,
}

const PortfolioItens = [
    {
        title: 'Portfolio 1',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/bv.png',
    },
    {
        title: 'Portfolio 2',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/bv.png',
    },
    {
        title: 'Portfolio 3',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/bv.png',
    },
];


const PortfolioSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const hovered = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const media = target.querySelector('video, audio') as HTMLMediaElement;
        if (media) {
            media.play();
        }
    }

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Content>
            <PortfolioContainer >
                <TitleSections>Portfolio</TitleSections>
                <div style={{width:'100%'}}>
                    <PortfolioHeader>
                        <h4>Projetos</h4>
                        {/* <Tags></Tags> */}
                    </PortfolioHeader>
                    <PortfolioCards href='#' >
                        <PortfolioCard>
                            <p>Nome do Projeto</p>
                           
                        </PortfolioCard>
                        
                    </PortfolioCards>


                </div>
            </PortfolioContainer>
        </Content>
    );
};

export default PortfolioSection;