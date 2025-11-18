import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface PricingProps {
  data: GymContent;
}

export const Pricing = ({ data }: PricingProps) => {
  return (
    <section id="pricing" className="max-w-5xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Pricing
      </motion.h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center md:justify-items-stretch">
        {data.pricing.map((p, i) => (
          <motion.div
            key={p.plan}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center md:items-start gap-2 rounded-lg border border-gray-700 p-5 hover:bg-gray-800/50 transition-colors w-full"
          >
            <h5 className="font-semibold text-lg">{p.plan}</h5>
            <span className="text-orange-400 font-bold text-xl">{p.amount}</span>
            <button className="mt-2 text-xs px-3 py-2 rounded bg-orange-500 hover:bg-orange-600 text-black font-medium">
              Choose
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
