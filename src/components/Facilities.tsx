import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface FacilitiesProps {
  data: GymContent;
}

export const Facilities = ({ data }: FacilitiesProps) => {
  return (
    <section id="facilities" className="max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Facilities
      </motion.h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-gray-700 rounded-lg p-5 hover:bg-gray-800/60 transition-colors group text-center md:text-left"
          >
            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-400">{f.title}</h4>
            <p className="text-xs md:text-sm text-gray-300 line-clamp-4">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
