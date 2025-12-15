import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import GrainImage from "@assets/images/grain.jpg";
import StarIcon from "@assets/icons/star.svg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          {/* Grain overlay */}
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          ></div>

          {/* Decorative stars */}
          <StarIcon className="size-12 text-gray-900/10 absolute -top-2 -left-2 md:size-16" />
          <StarIcon className="size-8 text-gray-900/10 absolute bottom-4 right-8 md:size-12" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s build something epic together 
              </h2>
              <p className="text-sm md:text-base mt-2 text-gray-900/80">
                Ready to bring your next project to life? I promise I won&apos;t mass produce your website.
                <span className="hidden md:inline"> DMs are open. No cap. </span>
                <span className="text-xs opacity-60">(I speak fluent meme)</span>
              </p>
            </div>
            <div>
              <a
                href="mailto:contact@yourportfolio.com"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-900 px-6 h-12 rounded-xl hover:bg-gray-800 transition duration-300 font-semibold whitespace-nowrap"
              >
                <span>👋 Contact Me</span>
                <ArrowUpRightIcon className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Easter egg for nerds */}
          <div className="mt-4 text-xs text-gray-900/50 font-mono hidden md:block">
            {`// TODO: Reply to this human's email`}
          </div>
        </div>
      </div>
    </section>
  );
};
