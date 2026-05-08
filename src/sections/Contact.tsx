"use client";

import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { HeaderSection } from "@/components/HeaderSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sectionCardVariants, viewportReveal } from "@/components/animation-presets";

const MotionCard = motion(Card);

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <HeaderSection
          title="Get In Touch"
          eyebrow="Let&apos;s Connect"
          description="Have a project in mind? I&apos;d love to hear about it."
        />

        <MotionCard className="mt-12 lg:mt-16 p-8 md:p-12 lg:p-16" initial="hidden" whileInView="visible" viewport={viewportReveal} variants={sectionCardVariants}>
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
                <Button asChild variant="heroDark" size="project" className="w-full sm:w-auto">
                  <a href="/contact" className="group/button">
                    <span>Contact Me</span>
                    <ArrowUpRightIcon className="size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </a>
                </Button>
                <Button asChild variant="heroLight" size="project" className="w-full sm:w-auto">
                  <a href="mailto:azizmeltzer@gmail.com">
                    <span>📧 Email</span>
                  </a>
                </Button>
              </div>
            </div>
        </MotionCard>
      </div>
    </section>
  );
};
