import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, TitleSections } from '../../App/styles';
import { PortfolioContainer, PortfolioCardTags, PortfolioCard, PortfolioCardImage, BrowseImage, PortfolioCardTitle, PortfolioCardHeader, PortfolioCards, PortfolioBrowsersImages } from './styles';
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
        title: 'Aplicativo SX Wallet',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/sxWalletApp.png',
    },
    {
        title: 'Portfolio 2',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/sxWalletApp.png',
    },
    {
        title: 'Portfolio 3',
        techs: ['React', 'Node', 'Postgres', 'Github'],
        image: '/src/assets/portfolio-assets/sxWalletApp.png',
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
        <PortfolioContainer>
          <TitleSections>Portfolio</TitleSections>
          <div style={{ width: "100%" }}>
            <PortfolioCards>
              {PortfolioItens.map((item, index) => (
                <PortfolioCard key={index}>
                  <PortfolioCardHeader>
                    <PortfolioCardTitle>{item.title}</PortfolioCardTitle>
                    <PortfolioCardTags>
                      {item.techs.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </PortfolioCardTags>
                  </PortfolioCardHeader>
                  <PortfolioBrowsersImages>
                    <BrowseImage className="browser-mockup">
                      <div>
                        <img src="https://cdn.discordapp.com/attachments/997292586333110365/1347813139114233889/ecommerce-site-2.png?ex=67cd304d&is=67cbdecd&hm=b3d40f70db22dd6d018a5fb3c9dc76cd7cc5956fcad6b48519ca9c1c2fe52e3e&" />
                        </div>
                    </BrowseImage>
                    <BrowseImage className="browser-mockup">
                    <div>
                        <img src="https://cdn.discordapp.com/attachments/997292586333110365/1347813139114233889/ecommerce-site-2.png?ex=67cd304d&is=67cbdecd&hm=b3d40f70db22dd6d018a5fb3c9dc76cd7cc5956fcad6b48519ca9c1c2fe52e3e&" />
                        </div>                    </BrowseImage>
                    <BrowseImage className="browser-mockup">
                    <div>
                        <img src="https://cdn.discordapp.com/attachments/997292586333110365/1347813139114233889/ecommerce-site-2.png?ex=67cd304d&is=67cbdecd&hm=b3d40f70db22dd6d018a5fb3c9dc76cd7cc5956fcad6b48519ca9c1c2fe52e3e&" />
                        </div>                    </BrowseImage>
                  </PortfolioBrowsersImages>
                  {/* <PortfolioCardImage src={item.image} alt={item.title} /> */}
                </PortfolioCard>
              ))}
            </PortfolioCards>
          </div>
        </PortfolioContainer>
      </Content>
    );
};

export default PortfolioSection;