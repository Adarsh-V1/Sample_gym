import Image from "next/image";
import { motion } from "framer-motion";
import { gymContent } from "@/data/gym/content";

export const Hero = () => {
	const highlightBadges = [
		"Air-Conditioned",
		"Top Equipment",
		"Approachable Trainers",
		"Great Atmosphere",
		"Pumped Energy Vibes",
	];

	const featureCards = [
		{ t: "AC Comfort", d: "Climate-controlled environment for optimal workouts." },
		{ t: "Premium Equipment", d: "Well-maintained machines for strength & cardio." },
		{ t: "Expert Trainers", d: "Approachable and professional guidance." },
		{ t: "Great Vibes", d: "Energetic atmosphere and supportive community." },
	];

	return (
		<section id="hero" className="relative min-h-[85vh] flex items-center justify-center text-white overflow-visible pt-4 md:pt-6 pb-8 md:pb-12">
			{/* Background image with overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/change/1.jpg"
					alt="gym background"
					fill
					className="object-cover opacity-25"
					priority
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>
			
			{/* Content layer */}
			<div className="relative z-10 w-full">
				<div className="page-container flex flex-col items-center justify-center text-center gap-4 md:gap-5">
					{/* Gym Name */}
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight"
					>
						{gymContent.name}
					</motion.h1>

					{/* Tagline */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="text-xl md:text-2xl font-semibold text-orange-300"
					>
						{gymContent.tagline}
					</motion.p>

					{/* Motivational Quote */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="text-lg md:text-xl font-light italic text-gray-300"
					>
						"Great atmosphere and pumped up energy vibes."
					</motion.p>

					{/* About Preview */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="max-w-2xl"
					>
						<p className="text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
							Air-Conditioned fitness center in Kadapa
						</p>
						<div className="space-y-3 text-base md:text-lg text-white/85">
							<p>
								<span className="font-bold text-orange-300">Hours:</span> 5:30 AM — 9:00 AM Mon
							</p>
						</div>
						<p className="text-base md:text-lg text-white/85 pt-2">
							Approachable trainers · Premium equipment · Great atmosphere
						</p>
					</motion.div>

					{/* Join Now Button */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="flex gap-4"
					>
						<a
							href="#contact"
							className="inline-block px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-bold text-base transition-colors"
						>
							Join Now
						</a>
					</motion.div>

					{/* Highlight Badges */}
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="flex flex-wrap justify-center gap-2 max-w-3xl"
					>
						{highlightBadges.map(b => (
							<li key={b} className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-sm md:text-base text-orange-300 font-medium">
								{b}
							</li>
						))}
					</motion.ul>

					{/* Feature Cards */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl"
					>
						{featureCards.map(card => (
							<div
								key={card.t}
								className="p-4 rounded-lg bg-white/5 border border-gray-700/50 backdrop-blur hover:border-orange-400/50 hover:bg-white/10 transition-all group"
							>
								<h5 className="text-sm font-bold text-orange-300 group-hover:text-orange-200 transition-colors">
									{card.t}
								</h5>
								<p className="text-xs text-gray-300 mt-2 leading-relaxed">
									{card.d}
								</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
