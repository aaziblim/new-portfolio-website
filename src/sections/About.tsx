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


export const AboutSection = () => {
  return <div className="pb-96">
    <HeaderSection
      title="About Me"
      eyebrow="A Glimpse Into My World"
      description="Learn about who, what I do and what inspires me."
    />

    <Card>
      <div>
<StarIcon className="w-6 h-6 text-yellow-500" />
<h3>
  My Reads
</h3>
<p>Explore the books that shape my perspective.</p>
      </div>
      <Image src={BookImage} alt="Book Cover" className="" />
    </Card>
{/* card 2 */}
    <Card>
      <div>
<StarIcon className="" />
<h3>
  My ToolBox
</h3>
<p>Explore the tools that I use to craft exceptional digital experiences.</p>
      </div>
    {ToolboxItems.map((item) => (
      <div key={item.title}>
       <TechIcon component={item.iconType} />
        <span>{item.title}</span>
      </div>
    ))}
    </Card>
  </div>;
};
