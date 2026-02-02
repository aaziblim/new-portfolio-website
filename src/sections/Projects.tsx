import spherespaceImage from "@/assets/images/spacephere homepage.png";
import aceItImage from "@/assets/images/ace-it homepage.png";
import portfolioImage from "@/assets/images/portfolio image.png";
import Image from "next/image";
import CheckIcon from "@assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import GrainImage from "@assets/images/grain.jpg";
import { HeaderSection } from "@/components/HeaderSection";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Spherespace",
    results: [
      { title: "Real-time chat with WebSocket messaging" },
      { title: "Live streaming with host controls" },
      { title: "Gamification with achievements & streaks" },
    ],
    link: "https://github.com/aaziblim/spaceSphere-hangout",
    demoLink: "https://vimeo.com/1157667528?fl=ip&fe=ec",
    image: spherespaceImage,
    isPrivate: false,
  },
  {
    company: "School Project",
    year: "2025",
    title: "ACE IT - AI Learning Assistant",
    results: [
      { title: "AI tutor with course & flashcard generation" },
      { title: "React Native + Expo + Supabase stack" },
      { title: "Personalized study plans" },
    ],
    link: "",
    demoLink: "https://drive.google.com/file/d/1MWoaVTanJlVGbApranXWrs7Zuh_7TpUN/view?usp=sharing",
    image: aceItImage,
    isPrivate: true,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Developer Portfolio",
    results: [
      { title: "Modern Next.js 14 with App Router" },
      { title: "Responsive design with Tailwind CSS" },
      { title: "Smooth animations & dark theme aesthetic" },
    ],
    link: "https://github.com/aaziblim/new-portfolio-website",
    demoLink: "",
    image: portfolioImage,
    isPrivate: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="opacity-0 animate-fade-in-up">
          <HeaderSection
            title="Real-world Results"
            eyebrow="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences."
          />
        </div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="group px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 opacity-0 animate-fade-in-up-2 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 transition-all duration-[180ms] ease-out"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase inline-flex gap-2 tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 flex items-center gap-3 flex-wrap">
                    {project.title}
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/70 rounded-full border border-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-3"
                        >
                          <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                        </svg>
                        Private
                      </span>
                    )}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row md:gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/btn">
                        <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 font-semibold h-12 w-full md:w-auto md:px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8 transition-opacity duration-[180ms] ease-out hover:opacity-90">
                          <span>View Code</span>
                          <ArrowUpRightIcon className="size-4 transition-transform duration-[180ms] ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </a>
                    )}

                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="group/demo">
                        <button className="bg-white/90 text-gray-950 font-semibold h-12 w-full md:w-auto md:px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8 transition-opacity duration-[180ms] ease-out hover:opacity-90">
                          <span>See Demo</span>
                          <ArrowUpRightIcon className="size-4 transition-transform duration-[180ms] ease-out group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-auto">
                    <div className="rounded-t-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                      {/* Browser chrome bar */}
                      <div className="bg-gray-800/80 px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                        </div>
                        <div className="flex-1 bg-gray-700/50 rounded-md h-5 ml-2"></div>
                      </div>
                      {/* Screenshot */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-[300px] md:max-h-[350px] lg:max-h-none object-cover object-top transition-transform duration-[180ms] ease-out group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
