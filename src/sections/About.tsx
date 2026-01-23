'use client';
import { Card } from "@/components/Card";
import { HeaderSection } from "@/components/HeaderSection";
import StarIcon from "@assets/icons/star.svg";
import Image from "next/image";
import BookImage from "@assets/images/book-cover.png";
import JavascriptIcon from "@assets/icons/square-js.svg";
import HTML5Icon from "@assets/icons/html5.svg";
import CSS3Icon from "@assets/icons/css3.svg";
import ReactIcon from "@assets/icons/react.svg";
import PythonIcon from "@assets/icons/python.svg";
import DjangoIcon from "@assets/icons/django.svg";
import ChromeIcon from "@assets/icons/chrome.svg";
import GithubIcon from "@assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@assets/images/mymap.png";
import SmileMemoji from "@assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


 
const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon
  },
  {
    title: "HTML5",
    iconType: HTML5Icon
  },
  {
    title: "CSS3",
    iconType: CSS3Icon
  },
  {
    title: "React",
    iconType: ReactIcon
  },

    {
    title: "CSS3",
    iconType: CSS3Icon
  },

   {
    title: "Python",
    iconType: PythonIcon
  },

   {
    title: "Django",
    iconType: DjangoIcon
  },

    {
    title: "Chrome",
    iconType: ChromeIcon
  },

    {
    title: "Github",
    iconType: GithubIcon
  }
]


const hobbies = [
  {
    title:"Reading",
    emoji:"📚",
    left:"5%",
    top:"5%",
  },
   {
    title:"Gaming",
    emoji:"🎮",
    left:"50%",
    top:"5%",
  },
  {
    title:"Vid. Editing",
    emoji:"🎬",
    left:"10%",
    top:"40%",
  },
  {
    title:"Traveling",
    emoji:"✈️",
    left:"60%",
    top:"40%",
  },
  {
    title:"Exploration",
    emoji:"🧭",
    left:"5%",
    top:"75%",
  },
  {
    title:"Nasheed",
    emoji:"🎵",
    left:"50%",
    top:"75%",
  }
]

export const AboutSection = () => {
const constraintRef =  useRef(null);

  return <div className="py-20 lg:py-28" id="about">
    <div className="container">
    <HeaderSection
      title="About Me"
      eyebrow="A Glimpse Into My World"
      description="Learn about who I am, what I do and what inspires me."
    />
<div className="mt-20 flex flex-col gap-8">
  <div className="flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title="My Reads" description="Explore the books that shape my perspective." />
      <div className="w-40 mx-auto mt-2 md:mt-0">
        <Image src={BookImage} alt="Book Cover" className="" />
      </div>
    </Card>
{/* card 2 */}
    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <div>
        <CardHeader title="My ToolBox" description="Explore the tools that I use to craft exceptional digital experiences."
         className="" />
      </div>
      <div>
           <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left animation-duration-[30s]" />
           <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right animation-duration-[30s]" />
      </div>
 
    </Card>
  </div>
<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2" >
      <div>
        <CardHeader className="px-6 py-6" title="Beyond the code" description="Explore my interests and hobbies outside of coding." />
      </div>
      <div className="relative flex-1" ref={constraintRef}>
        {hobbies.map((hobby) => (
          <motion.div key={hobby.title} className="inline-flex items-center absolute gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" 
          style={{left:hobby.left,
            top:hobby.top
          }} drag dragConstraints={constraintRef} >
             <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
           
          </motion.div>
        ))}
      </div>
    </Card>

    <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1 relative">
      <Image src={MapImage} alt="Map" className="h-full w-full object-cover" />
      <div className=" size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  
      after:content-[''] after:absolute after:inset-0 after:outline-2 after:rounded-full after:outline-gray950/30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]">

        </div>
         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-10 ">

        </div>
         <Image src={SmileMemoji} alt="Smile Memoji" className="size-20"/>
      </div>
     
    </Card>
  </div>
  </div>
  </div>
  </div>
};
