import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import { styles } from "../styles";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { init } from "ityped";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";
import Typewriter from "typewriter-effect"
import Photo from "../assets/photo2.jpg"


function Hero() {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="items-center justify-center mt-5 flex-flex-col">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />

          </div>

          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hii there, I'm <p className="name text-[#915EFF]">Nirmalkumar M</p>
            </h1>
            <h3  className={`${styles.heroSubText} mt-2 green-text-gradient`}>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer","React Devloper","Designer", "React Three Fiber",],
                  autoStart: true,
                  loop: true,
                  delay:100,
                }}
              />
            </h3>
            <div className="absolute link1">
              <a href="https://github.com/Nirmalkumar882000" target="_blank">
                <AiOutlineGithub />
              </a>
              <a
                href=""
                target="_blank"
              >
                <ImLinkedin />
              </a>
              <a href="" target="_blank">
                <AiOutlineInstagram />
              </a>
              <a href="" target="_blank">
                <BiLinkAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute imgcontainer1 violet-gradient">
          <img src={Photo} alt="photo" className="object-contain" />
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
}

export default Hero;
