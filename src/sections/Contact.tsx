import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { HeaderSection } from "@/components/HeaderSection";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <HeaderSection
          title="Get In Touch"
          eyebrow="Let&apos;s Connect"
          description="Have a project in mind? I&apos;d love to hear about it."
        />

        <div className="mt-12 lg:mt-16">
          <Card className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-center md:text-left">
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    Let&apos;s build
                  </span>{" "}
                  something great together
                </h2>
                <p className="text-sm md:text-base lg:text-lg mt-4 text-white/60 max-w-xl">
                  Looking for a developer who cares about quality and detail? I&apos;m available for freelance projects and collaborations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 px-6 h-12 rounded-xl hover:opacity-90 transition duration-300 font-semibold whitespace-nowrap"
                >
                  <span>Contact Me</span>
                  <ArrowUpRightIcon className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="mailto:azizmeltzer@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 border border-white/15 text-white/90 px-6 h-12 rounded-xl hover:bg-white/5 transition duration-300 font-semibold whitespace-nowrap"
                >
                  <span>📧 Email</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
