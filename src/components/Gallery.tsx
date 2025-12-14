import Image from "next/image";
import { gymContent } from "@/data/gym/content";

const FALLBACK_IMAGES = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/change/4.jpg",
];

// Build list: prefer custom gallery, fill with fallback, ensure exactly 4
const images = [...(gymContent.gallery?.filter(Boolean) ?? []), ...FALLBACK_IMAGES].slice(0, 4);

export const Gallery = () => {
  return (
    <section id="gallery" className="relative page-container">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/change/2.jpg')" }}
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <figure
            key={src + i}
            className="relative h-48 md:h-56 rounded-xl overflow-hidden group bg-gray-800"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw"
              decoding="async"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </figure>
        ))}
      </div>
    </section>
  );
};
