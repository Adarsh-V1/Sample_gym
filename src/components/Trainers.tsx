import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/change/4.jpg",
];

export const Trainers = () => (
  <section id="gym-images" className="max-w-6xl mx-auto px-4">
    <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
      Gym Visuals
    </h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((src, i) => (
        <figure
          key={src + i}
          className="relative h-48 md:h-56 rounded-xl overflow-hidden group bg-gray-800"
        >
          <img
            src={src}
            alt={`gym-${i}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
        </figure>
      ))}
    </div>
  </section>
);
