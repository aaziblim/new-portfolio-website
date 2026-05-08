
"use client";

import Image from "next/image";
import MemojiImage from "@assets/images/memoji-computer.png";
import GrainImage from "@assets/images/grain.jpg";
import ArrowDown from "@assets/icons/arrow-down.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroContainerVariants, heroLetterVariants, sectionItemVariants } from "@/components/animation-presets";

const heroTitle = "Full-Stack Developer & Mobile Engineer";


export const HeroSection = () => {
  return (
    <div id="home" className="py-32 md:py-48 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${GrainImage})` }}
        ></div>

        <div className="hero_ring size-[40vw] md:size-[500px] lg:size-[40vw]"></div>
        <div className="hero_ring size-[55vw] md:size-[650px] lg:size-[55vw]"></div>
        <div className="hero_ring size-[70vw] md:size-[800px] lg:size-[70vw]"></div>
        <div className="hero_ring size-[85vw] md:size-[950px] lg:size-[85vw]"></div>
        <div className="hero_ring size-[100vw] md:size-[1100px] lg:size-[100vw]"></div>

        {/* <HeroOrbit size={800} rotate={-72}>
          <StarIcon className="size-28 text-emerald-300 inline-flex" />
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20}>
          <StarIcon className="size-12 text-emerald-300 inline-flex" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <StarIcon className="size-8 text-emerald-300 inline-flex" />
        </HeroOrbit>

        <HeroOrbit size={430} rotate={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20 inline-flex" />
        </HeroOrbit>

        <HeroOrbit size={440} rotate={79}>
          <SparkleIcon className="size-5 text-emerald-300/20 inline-flex" />{" "}
        </HeroOrbit>
        <HeroOrbit size={530} rotate={178}>
          <SparkleIcon className="size-10 text-emerald-300/20 inline-flex" />
        </HeroOrbit>
        <HeroOrbit size={710} rotate={144}>
          <SparkleIcon className="size-14 text-emerald-300/20 inline-flex" />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={85}>
          <div className="size-3 rounded-full bg-emerald-300/20 inline-flex" />
        </HeroOrbit>
        */}
      </div>

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <motion.div variants={sectionItemVariants}>
            <Image
            src={MemojiImage}
              className="size-[100px]"
              alt="a man sitting behind a laptop"
            />
          </motion.div>

          <motion.div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg" variants={sectionItemVariants}>
            <div className="relative flex items-center justify-center">
              <div className="size-2.5 rounded-full bg-green-500"></div>
              <div className="absolute size-2.5 bg-green-500 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available now for new projects
            </div>
          </motion.div>
          <div className="max-w-lg mx-auto lg:max-w-3xl">
            <motion.h1
              className="font-serif font-extrabold text-3xl md:text-5xl lg:text-7xl text-center mt-8 tracking-tight"
              variants={sectionItemVariants}
            >
              <span className="sr-only">{heroTitle}</span>
              <span aria-hidden className="inline-flex flex-wrap justify-center">
                {Array.from(heroTitle).map((character, index) => (
                  <motion.span
                    key={`${character}-${index}`}
                    variants={heroLetterVariants}
                    className="inline-block whitespace-pre"
                  >
                    {character === " " ? "\u00A0" : character}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p className="mt-4 text-center text-white/60 md:text-base lg:text-lg" variants={sectionItemVariants}>
             Developer focused on performance, user experience, and scalable digital systems.
            </motion.p>
          </div>

          <motion.div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4" variants={sectionItemVariants}>
            <Button asChild variant="heroLight" size="hero" className="transition-all duration-200">
              <Link href="#projects" className="group/button">
                <span className="mr-2">View my work</span>
                <ArrowDown className="size-4 transition-transform group-hover/button:translate-y-0.5" />
              </Link>
            </Button>

            <Button asChild variant="heroDark" size="hero" className="transition-all duration-200">
              <Link href="/resume">
                Check out resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
