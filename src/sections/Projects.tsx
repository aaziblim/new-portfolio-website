import spherespaceImage from "@/assets/images/spacephere homepage.png";
import aceItImage from "@/assets/images/ace-it homepage.png";
import eventManagementImage from "@/assets/images/event management.png";
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
    title: "Spherespace Hangout",
    results: [
      { title: "Real-time chat messaging" },
      { title: "Live streaming controls" },
      { title: "Achievements and streaks" },
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
      { title: "AI tutor and flashcards" },
      { title: "React Native and Supabase" },
      { title: "Personalized study plans" },
    ],
    link: "",
    demoLink: "https://drive.google.com/file/d/1MWoaVTanJlVGbApranXWrs7Zuh_7TpUN/view?usp=sharing",
    image: aceItImage,
    imageHeightClass: "max-h-[250px] md:max-h-[300px]",
    imagePositionClass: "object-center",
    isPrivate: false,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Event Management Platform",
    results: [
      { title: "Multi-event session management" },
      { title: "QR ticketing and check-in" },
      { title: "Next.js with Prisma ORM" },
    ],
    link: "https://github.com/aaziblim/Event-management-system",
    demoLink: "",
    image: eventManagementImage,
    isPrivate: false,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "This Developer's Portfolio",
    results: [
      { title: "Next.js App Router build" },
      { title: "Responsive Tailwind design" },
      { title: "Smooth animated interface" },
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

                  <div className="mt-2 md:mt-5 min-h-[72px] md:min-h-[92px]">
                    <h3 className="max-w-[16ch] font-serif font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex min-w-0 gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 shrink-0 md:size-6" />
                        <span className="block whitespace-nowrap">
                          {result.title}
                        </span>
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
                      <Image
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-auto ${project.imageHeightClass ?? "max-h-[300px] md:max-h-[350px] lg:max-h-none"} object-cover ${project.imagePositionClass ?? "object-top"} transition-transform duration-[180ms] ease-out group-hover:-translate-y-1`}
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
