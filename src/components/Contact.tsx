import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface ContactProps {
  data: GymContent;
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Contact & Location
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 items-center md:items-start text-center md:text-left"
        >
          <p className="text-sm md:text-base">
            <span className="font-semibold">Address:</span> {data.address}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Phone:</span> {data.phone}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Opening Hours:</span> {data.openingHours}
          </p>
          <a
            href={`tel:${data.phone.replace(/\s+/g, "")}`}
            className="inline-block mt-2 px-4 py-2 rounded bg-orange-500 text-black text-sm font-medium w-fit hover:bg-orange-600 transition-colors"
          >
            Call Now
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border border-gray-700 h-64 md:h-80"
        >
          <iframe
            title="Gym Location"
            src={data.googleMapEmbedUrl || "about:blank"}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
