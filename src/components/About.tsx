import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface AboutProps {
  data: GymContent;
}

export const About = ({ data }: AboutProps) => {
  // Build derived quick links: Directions + Call
  const tel = data.phone ? `tel:${data.phone.replace(/\s+/g, "")}` : undefined;
  const mapUrl =
    data.googleMapEmbedUrl ||
    (data.address
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`
      : undefined);

  const quickLinks: { label: string; url: string }[] = [
    ...(mapUrl ? [{ label: "Directions", url: mapUrl }] : []),
    ...(tel ? [{ label: "Call", url: tel }] : []),
    ...(data.links ?? []),
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
      >
        About Us
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left"
      >
        {data.about}
      </motion.p>

      {/* Web results / quick actions */}
      {quickLinks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
        >
          {quickLinks.map(link => (
            <a
              key={link.label + link.url}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-3 py-2 rounded-md border border-gray-700 text-xs md:text-sm text-gray-200 hover:bg-gray-800/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </section>
  );
};
