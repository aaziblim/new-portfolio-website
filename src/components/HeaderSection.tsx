"use client";

import { motion } from "framer-motion";
import { sectionContainerVariants, sectionItemVariants, viewportReveal } from "@/components/animation-presets";

export const HeaderSection = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={sectionContainerVariants}
    >
      <motion.div className="flex justify-center" variants={sectionItemVariants}>
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {title}
        </p>
      </motion.div>

      <motion.h2
        className="font-serif font-extrabold text-3xl md:text-5xl justify-center text-center mt-6"
        variants={sectionItemVariants}
      >
        {eyebrow}
      </motion.h2>
      <motion.p
        className="text-center md:text-lg lg:text-xl text-white/40 mt-4 max-w-md mx-auto"
        variants={sectionItemVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
