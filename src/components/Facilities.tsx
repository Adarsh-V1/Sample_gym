import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import Image from "next/image";

interface FacilitiesProps {
  data: GymContent;
}

export const Facilities = ({ data }: FacilitiesProps) => {
  return (
    <motion.section
      id="facilities"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="relative page-container py-16 md:py-24"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/change/3.jpg"
          alt="facilities background"
          fill
          className="object-cover opacity-15"
        />
      </div>

      <h3 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">
        Facilities
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.facilities.map((f, i) => (
          <div
            key={f.title}
            className="group relative border border-gray-700 rounded-xl p-5 flex flex-col gap-3 backdrop-blur-sm bg-black/25 hover:bg-black/40 transition-colors"
          >
            <span className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
              {i + 1}
            </span>
            <h4 className="font-semibold text-sm md:text-base lg:text-lg group-hover:text-orange-400 transition-colors">
              {f.title}
            </h4>
            <p className="text-[11px] md:text-xs lg:text-sm text-gray-300 leading-relaxed line-clamp-4">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
