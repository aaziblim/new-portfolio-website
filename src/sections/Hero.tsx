
import Image from "next/image";
import MemojiImage from "@assets/images/memoji-computer.png";
import GrainImage from "@assets/images/grain.jpg";
import StarIcon from "@assets/icons/star.svg";
import SparkleIcon from "@assets/icons/sparkle.svg";
import ArrowDown from "@assets/icons/arrow-down.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";


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
        <div className="flex flex-col items-center">
          <Image
            src={MemojiImage}
            className="size-[100px]"
            alt="a man sitting behind a laptop"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative flex items-center justify-center">
              <div className="size-2.5 rounded-full bg-green-500"></div>
              <div className="absolute size-2.5 bg-green-500 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available now for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto lg:max-w-3xl">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-center mt-8 tracking-wide">
              Full-Stack Developer & Mobile Engineer
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-base lg:text-lg">
              I build modern web and mobile applications with React, Next.js,
              React Native, and Python/Django. Let&apos;s bring your ideas to life.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white text-gray-900 border border-white/15 px-6 h-12 lg:px-6 lg:h-14 rounded-xl hover:bg-white/90 hover:text-gray-900 transition duration-300 font-semibold"
            >
              <span className="mr-2">Explore my work below</span>
              <ArrowDown className="size-4 group-hover:translate-y-0.5 transition-all" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 h-12 lg:px-6 hover:bg-white/5 lg:h-14 rounded-xl border border-white/15 text-white/90 font-semibold"
            >
              <span className="mr-2">📄</span>
              Check out resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
