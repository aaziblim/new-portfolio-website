import { Card } from "@/components/Card";
import { HeaderSection } from "@/components/HeaderSection";
import StarIcon from "@assets/icons/star.svg";
import Image from "next/image";
import BookImage from "@assets/images/book-cover.png";
import JavascriptIcon from "@assets/icons/square-js.svg";
import HTML5Icon from "@assets/icons/html5.svg";
import CSS3Icon from "@assets/icons/css3.svg";
import ReactIcon from "@assets/icons/react.svg";
import ChromeIcon from "@assets/icons/chrome.svg";
import GithubIcon from "@assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@assets/images/mymap.png";
import SmileMemoji from "@assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";


 
const ToolboxItems = [
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
  },
  {
    title:"Video Editing",
    emoji:"🎬",
  },
  {
    title:"Gaming",
    emoji:"🎮",
  },
  {
    title:"Traveling",
    emoji:"✈️",
  },
  {
    title:"Exploration",
    emoji:"🧭",
  },
  {
    title:"Photography",
    emoji:"📷",
  },
  {
    title:"Nasheed",
    emoji:"🎵",
  }
]

export const AboutSection = () => {
  return <div className="py-20" id="about">
    <div className="container">
    <HeaderSection
      title="About Me"
      eyebrow="A Glimpse Into My World"
      description="Learn about who I am, what I do and what inspires me."
    />
<div className="mt-20">
    <Card className="h-[320px]">
      <CardHeader title="My Reads" description="Explore the books that shape my perspective." />
      <div className="w-40 mx-auto mt-8">
        <Image src={BookImage} alt="Book Cover" className="" />
      </div>
    </Card>
{/* card 2 */}
    <Card>
      <div>
        <CardHeader title="My ToolBox" description="Explore the tools that I use to craft exceptional digital experiences." />
      </div>
    {ToolboxItems.map((item) => (
      <div key={item.title} className="inline-flex items-cente gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg m-1">
       <TechIcon component={item.iconType} />
        <span className="font-semibold">{item.title}</span>
      </div>
    ))}
    </Card>

    <Card>
      <div>
        <CardHeader title="Beyond the code" description="Explore my interests and hobbies outside of coding." />
      </div>
      <div>
        {hobbies.map((hobby) => (
          <div key={hobby.title}>
             <span>{hobby.title}</span>
            <span>{hobby.emoji}</span>
           
          </div>
        ))}
      </div>
    </Card>

    <Card>
      <Image src={MapImage} alt="Map" className="" />
      <Image src={SmileMemoji} alt="Smile Memoji" className="" />
    </Card>
  </div>;
  </div>
  </div>
};
