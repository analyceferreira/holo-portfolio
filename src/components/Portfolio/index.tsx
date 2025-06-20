import React, { Suspense } from "react";
import { TitleSections } from "../../App/styles";
import {
  PortfolioContainer,
  PortfolioCardTags,
  PortfolioCard,
  BrowseImage,
  PortfolioCardTitle,
  PortfolioCardHeader,
  PortfolioCards,
  PortfolioBrowsersImages,
} from "./styles";
import { GrNode, GrReactjs } from "react-icons/gr";
import {
  BiLink,
  BiLogoDocker,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { SiMysql, SiNestjs, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { Content } from "../PageContent/styles";
import ImageModal from "./imageModal";
import { PiFigmaLogo } from "react-icons/pi";

const TechsIcons: { [key: string]: JSX.Element } = {
  React: <GrReactjs />,
  Node: <GrNode />,
  Typescript: <BiLogoTypescript />,
  Vue: <BiLogoVuejs />,
  Next: <SiNextdotjs />,
  Nest: <SiNestjs />,
  Postgres: <SiPostgresql />,
  Mysql: <SiMysql />,
  Docker: <BiLogoDocker />,
  Github: <BiLogoGithub />,
};

type PortfolioItemProps = {
  title: string;
  techs: string[];
  link?: string;
  images: string[];
  github?: string;
  figma?: string;
};

const PortfolioItens: PortfolioItemProps[] = [
  {
    title: "Fichas 24h",
    techs: ["FlutterFlow", "Node", "Postgres", "Figma"],
    link: "https://apps.apple.com/br/app/fichas-24-horas/id6469055865",
    images: [
      "./portfolio-assets/fichas24h/3.png",
      "./portfolio-assets/fichas24h/1.png",
      "./portfolio-assets/fichas24h/2.png",
    ],
  },
  {
    title: "Caixa BetVencedor",
    link: "https://betvencedor.com/",
    techs: ["NextJS", "Framer Motion", "React Query", "Tailwind", "Figma"],
    images: [
      "./portfolio-assets/betvencedor/1.png",
      "./portfolio-assets/betvencedor/3.png",
      "./portfolio-assets/betvencedor/2.png",
    ],
  },
  {
    title: "Ecommerce Platform",
    github: "https://github.com/analyceferreira/ecommerce-pi",
    techs: ["EJS", "Node", "Postgres", "Express", "Figma"],
    images: [
      "./portfolio-assets/ecommerce/1.png",
      "./portfolio-assets/ecommerce/3.png",
      "./portfolio-assets/ecommerce/2.png",
    ],
  },
  {
    title: "GlobalProtege",
    link: "https://globalprotege.com.br",
    techs: [
      "NextJs",
      "React",
      "Tailwind",
      "React Hook Form",
      "Zod",
      "Gsap",
      "Figma",
    ],
    images: [
      "./portfolio-assets/globalprotege/4.png",
      "./portfolio-assets/globalprotege/3.png",
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [openImageModal, setOpenImageModal] = React.useState(false);
  const [imagesModal, setImagesModal] = React.useState<string[]>([]);
  const [initialIndex, setInitialIndex] = React.useState(0);

  const hovered = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const media = target.querySelector("video, audio") as HTMLMediaElement;
    if (media) {
      media.play();
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Content id="portfolio">
      <PortfolioContainer>
        <TitleSections>Portfolio</TitleSections>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "140px",
          }}
        >
          {PortfolioItens.map((item, index) => (
            <PortfolioCards key={index}>
              <PortfolioCard key={index}>
                <PortfolioCardHeader>
                  <PortfolioCardTitle>
                    {item.title}
                    {item.link && (
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          transition: "color 0.2s",
                        }}
                        href={item.link}
                        target="_blank"
                      >
                        <BiLink size={24} />
                      </a>
                    )}
                    {item.github && (
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          transition: "color 0.2s",
                        }}
                        href={item.github}
                        target="_blank"
                      >
                        <BiLogoGithub size={24} />
                      </a>
                    )}
                    {item?.figma && (
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          transition: "color 0.2s",
                        }}
                        href={item?.figma}
                        target="_blank"
                      >
                        <PiFigmaLogo size={22} />
                      </a>
                    )}
                  </PortfolioCardTitle>
                  <PortfolioCardTags>
                    {item.techs.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </PortfolioCardTags>
                </PortfolioCardHeader>
                <PortfolioBrowsersImages>
                  {item.images.map((image, index) => (
                    <Suspense fallback={<div>Loading...</div>} key={index}>
                      <BrowseImage
                        className="browser-mockup"
                        onClick={(e) => {
                          setOpenImageModal(true);
                          setImagesModal(item.images);
                          setInitialIndex(index);
                        }}
                        image={image}
                      >
                        <div key={index}>
                          <img src={image} />
                        </div>
                      </BrowseImage>
                    </Suspense>
                  ))}
                </PortfolioBrowsersImages>
              </PortfolioCard>
            </PortfolioCards>
          ))}
        </div>
      </PortfolioContainer>
      {openImageModal && (
        <ImageModal
          images={imagesModal}
          onClose={() => setOpenImageModal(false)}
          initialIndex={initialIndex}
        />
      )}
    </Content>
  );
};

export default PortfolioSection;
