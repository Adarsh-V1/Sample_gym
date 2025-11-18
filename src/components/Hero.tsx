import { motion } from "framer-motion";
import { type GymContent } from "@/data/gym/content";

interface HeroProps {
  data: GymContent;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Hero = ({ data }: HeroProps) => {
  const heroCandidates = [
    data.gallery?.[0],
    "/assets/change/1.jpg",
    "/assets/default/girl1.jpg",
  ].filter(Boolean) as string[];
  const heroBg = heroCandidates[0];

  return (
    <header id="hero" className="relative flex items-center justify-center min-h-[70vh] pt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center gap-4">
        <motion.h1 custom={0} initial="hidden" animate="show" variants={variants} className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {data.name}
        </motion.h1>
        <motion.h2 custom={1} initial="hidden" animate="show" variants={variants} className="text-xl md:text-2xl text-orange-400 font-semibold">
          {data.tagline}
        </motion.h2>
        <motion.p custom={2} initial="hidden" animate="show" variants={variants} className="text-sm md:text-base text-gray-300 max-w-[60ch]">
          {data.about.slice(0, 160)}...
        </motion.p>
        <motion.div custom={3} initial="hidden" animate="show" variants={variants} className="flex gap-4 mt-4">
          <a href="#pricing" className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-black text-sm font-medium transition-colors">
            View Plans
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black text-sm font-medium transition-colors">
            Join Now
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${heroBg}')` }} />
    </header>
  );
};
