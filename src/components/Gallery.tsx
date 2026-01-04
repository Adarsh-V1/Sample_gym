import Image from "next/image";
import { motion } from "framer-motion";
import { gymContent } from "@/data/gym/content";

export const Gallery = () => {
	const galleryImages = gymContent.gallery.slice(0, 4);

	if (galleryImages.length === 0) return null;

	return (
		<motion.section
			id="gallery"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.3 }}
			className="page-container py-16 md:py-24"
		>
			<h3 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">
				Gallery
			</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{galleryImages.map((img, i) => (
					<div
						key={i}
						className="relative h-48 md:h-64 rounded-lg overflow-hidden group bg-gray-800"
					>
						<Image
							src={img}
							alt={`Gallery ${i + 1}`}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
				))}
			</div>
		</motion.section>
	);
};
