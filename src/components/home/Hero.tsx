import Image from "next/image";
import { motion } from "framer-motion";
import { gymContent } from "@/data/gym/content";

export const Hero = () => {
	return (
		<section id="hero" className="bg-gradient-to-b from-black/80 to-black/60 text-white">
			{/* Logo at top (centered) */}
			<div className="w-full py-4 md:py-6 flex justify-center">
				<div className="w-24 h-24 md:w-32 md:h-32 relative rounded-md overflow-hidden border border-white/10">
					<Image src={gymContent.logo ?? "/assets/change/5.jpg"} alt={`${gymContent.name} logo`} fill sizes="128px" />
				</div>
			</div>

			<div className="page-container py-8 md:py-24 flex flex-col md:flex-row items-center gap-6">
				{/* Details */}
				<div className="flex-1 text-center md:text-left">
					<motion.h1
						initial={{ scale: 0.98, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="text-2xl md:text-3xl font-bold"
					>
						{gymContent.name}
					</motion.h1>

					<div className="mt-3 text-sm text-white/90 space-y-1">
						<div>{gymContent.address}</div>
						<div className="text-sm text-orange-300">{gymContent.openingHours}</div>
					</div>

					{/* Contact numbers (display only) */}
					<div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
						{(gymContent.phones ?? [gymContent.phone]).map((p, idx) => {
							const digits = p.replace(/\D/g, "");
							const normalized = digits.startsWith("91") ? digits : digits.replace(/^0+/, "") || digits;
							const display = `+91 ${normalized.startsWith("91") ? normalized.slice(2) : normalized}`.replace(/^(\+91) (\d{5})(\d{5})$/, "$1 $2 $3");
							return (
								<div key={p} className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-md text-sm transition-transform duration-200 hover:scale-105">
									<span className="font-semibold">{display}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
