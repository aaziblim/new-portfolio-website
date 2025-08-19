import Image from "next/image";

import MemojiImage from "@assets/images/memoji-computer.png";
import GrainImage from "@assets/images/grain.jpg";
import StarIcon from "@assets/icons/star.svg";
import SparkleIcon from "@assets/icons/sparkle.svg";

import ArrowDown from "@assets/icons/arrow-down.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${GrainImage})` }}
        ></div>

        <div className="hero_ring size-[0620px] lg:size-[40vw] "></div>
        <div className="hero_ring size-[0820px] lg:size-[55vw]"></div>
        <div className="hero_ring size-[1020px] lg:size-[70vw]"></div>
        <div className="hero_ring size-[1220px] lg:size-[85vw]"></div>
        <div className="hero_ring size-[1420px] lg:size-[100vw]"></div>

        <HeroOrbit size={800} rotate={-72}>
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
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={MemojiImage}
            className="size-[100px]"
            alt="a man sitting behind a laptop"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available now for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto lg:max-w-3xl">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-center mt-8 tracking-wide">
              Building Exceptional User experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-base lg:text-lg">
              We specialize in creating user-friendly interfaces that enhance
              the overall user experience. Let's connect to discuss the projects
              you have.😎
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 lg:px-6 lg:h-14 rounded-xl">
              <span className="font-semibold"> 👀Explore my work below</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 border border-white px-6 h-12 lg:px-6 lg:h-14 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
