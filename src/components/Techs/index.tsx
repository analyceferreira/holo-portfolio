import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import React from "react";
import { Parallax, Separator } from "./styles";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";
import { BiLogoTypescript, BiLogoVuejs } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbPointerCode } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";


import { RiCodeFill } from "react-icons/ri";



interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({ children, className, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 40
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 20], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-1, 15.7, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Parallax className={`${className}`}>
      <motion.div 
        style={{ x }}
        className={`scroller`}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </Parallax>
  );
}

export default function Techs() {
  return (
    <section>
      <ParallaxText className="parallax" baseVelocity={1}>
        <span style={{display: "flex"}}>
          <Separator />
          <span>
            <FaCode />
          Developer
          </span>
          <Separator />
          <span>
            <TbPointerCode />
            Web
          </span>
          <Separator />
          <span>
            <TbDeviceDesktopCode/>
            Full stack
          </span>
          <Separator />
          <span>
            <FaCode />
            Developer
            </span>
          <Separator />
          <span>
            <TbPointerCode />
            Web
          </span>
          <Separator />
          <span>
            <TbDeviceDesktopCode/>
            Full stack
          </span>
        </span>
      </ParallaxText>
      <ParallaxText className="parallax-top" baseVelocity={-1}>
        <span style={{ display: "flex"}}>
          <Separator />
          <span>
            <GrReactjs /> React
          </span>
          <Separator />
          <span>
            <SiNextdotjs /> NextJS
          </span>
          <Separator />
          <span>
            <TbBrandTypescript />
            Typescript
          </span>
          <Separator />
          <span>
            <BiLogoVuejs />
            VueJS
          </span>
          <Separator />
          <span> 
            <GrNode />
            NodeJS
          </span>
          <Separator />
          <span>
            <SiPostgresql />
            Postgres
          </span>
        </span>
      </ParallaxText>
    </section>
  );
}