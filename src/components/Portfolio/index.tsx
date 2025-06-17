import React from "react";
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

const PortfolioItens = [
  {
    title: "Fichas 24h",
    techs: ["FlutterFlow", "Node", "Postgres", "Figma"],
    link: "https://apps.apple.com/br/app/fichas-24-horas/id6469055865",
    images: [
      "https://media.discordapp.net/attachments/997292586333110365/1384222877171322971/mockup-HomeLogadoFichas24hAppDark.png?ex=6851a583&is=68505403&hm=aeef494e5d71416fd1722f6c0694f5d48ca12fbf7b21b0ac5b0f456fe4b1a873&=",
      "https://media.discordapp.net/attachments/997292586333110365/1384214415943143567/HomeLogadoFichas24hAppDark.png?ex=68519da2&is=68504c22&hm=0de58a1add2a21ba364a2330e7d20c19c37a75664d63dfc89e0e1e31ac7d8eea&=",
      "https://media.discordapp.net/attachments/997292586333110365/1384222876529328299/iphone-multiple-screens-mockupFichas24hAppDark.png?ex=6851a583&is=68505403&hm=2fab435a39084238e013573be17074f13d849e617aa4f58c247d033f423d99ac&=",
    ],
  },
  {
    title: "Caixa BetVencedor",
    link: "https://betvencedor.com/",
    // github: "https://github.com/analyceferreira/loot-box-bV",
    // figma:
    //   "https://www.figma.com/design/YRyhvhRDM6frW1BcP173ow/Caixa-bV?t=ufYYuBczKIBk5zc5-1",
    techs: ["NextJS", "Framer Motion", "React Query", "Tailwind", "Figma"],
    images: [
      "https://media.discordapp.net/attachments/997292586333110365/1384223947460972564/iphone-multiple-screens-mockup_1_1.png?ex=6851a682&is=68505502&hm=d54727a2ecb05ad1a7b9755dc74e439b6c735fcb8f8c4b01da5f4d379ec4e940&=",
      "https://media.discordapp.net/attachments/997292586333110365/1347813304147509270/Hero_loading.jpg?ex=68510674&is=684fb4f4&hm=b98803b5c518eda9b68ae7eec52d44fbdfc9d6cbf1c16f4f3b73537fbda45db2&=",
      "https://media.discordapp.net/attachments/997292586333110365/1347813305535696896/Hero_opened.png?ex=68510675&is=684fb4f5&hm=217c70ae24b86cd1b7084f8f2009857e038fa62723eba5143e35bf64ad941112&=",
    ],
  },
  {
    title: "Ecommerce Platform",
    github: "https://github.com/analyceferreira/ecommerce-pi",
    figma:
      "https://www.figma.com/design/GNHUs8A5ZPVtGlFEg9GNYh/Layout-Ecommerce-Plataform?node-id=0-1&t=ufYYuBczKIBk5zc5-1",
    techs: ["EJS", "Node", "Postgres", "Express", "Figma"],
    images: [
      "https://media.discordapp.net/attachments/997292586333110365/1384235976867713255/Scene_13.png?ex=6851b1b6&is=68506036&hm=7c5d22d4e9bcd7ee76437c392c2dca2e4aa367afe1527bd6a186f8a74b560299&=",
      "https://media.discordapp.net/attachments/997292586333110365/1025050740659585024/a.png?ex=685223a5&is=6850d225&hm=c22d254ad75c18fc58ddda34caa1035302c7889ffbc39f8f75c56dfa19b5f398&=",
      "https://media.discordapp.net/attachments/997292586333110365/1025050050189074483/Opera_Instantaneo_2022-08-30_180520_localhost_2.png?ex=68522300&is=6850d180&hm=34d4a9406f968330561c8126ca374000a71fd4d83aa3e00624c725005802c1c6&=",
      "https://media.discordapp.net/attachments/997292586333110365/1384235978335584316/Frame_1.png?ex=6851b1b7&is=68506037&hm=17bdc6b0160116317417d74b11a14eb5084f6b99addbf09255e9002332f073f7&=",
      "https://media.discordapp.net/attachments/997292586333110365/1384235979463721072/Frame_5.png?ex=6851b1b7&is=68506037&hm=d6868eca0b153a3df1e8b28750a5183841c31bbb6267589fc6cca44915b7153d&=",
    ],
  },
  {
    title: "GlobalProtege",
    link: "https://globalprotege.com.br",
    figma:
      "https://www.figma.com/design/pAmJRRIaYAc44F0yQHW6Aw/GlobalProtege?t=ufYYuBczKIBk5zc5-1",
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
      "https://media.discordapp.net/attachments/997292586333110365/1384233670549835917/Scene_13_1.png?ex=6851af90&is=68505e10&hm=32f0f6a0967ff99b65c2f332cc0eb32d76ea8abee708900b5e3dad15b12ad179&=",
      "https://media.discordapp.net/attachments/997292586333110365/1384232806158172220/Home_2.png?ex=6851aec2&is=68505d42&hm=2cdd81f35f57af37698c7f62a254acf9bf222afa44f36362d1cc26d2f7adf423&=",
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
            gap: "60px",
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
                    {item.figma && (
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          transition: "color 0.2s",
                        }}
                        href={item.figma}
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
