import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface ReviewsProps {
	data: GymContent;
}

export const Reviews = ({ data }: ReviewsProps) => {
	if (!data.reviews || data.reviews.length === 0) return null;

	return (
		<motion.section
			id="reviews"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.3 }}
			className="page-container py-16 md:py-24"
		>
			<h3 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">
				Reviews
			</h3>
			<div className="grid md:grid-cols-2 gap-6">
				{data.reviews.map((review, i) => (
					<div
						key={i}
						className="border border-gray-700 rounded-lg p-6 bg-black/25 backdrop-blur-sm"
					>
						<div className="flex items-center gap-2 mb-3">
							<div className="flex gap-1">
								{Array.from({ length: 5 }).map((_, starIndex) => (
									<span
										key={starIndex}
										className={`text-lg ${
											starIndex < review.rating
												? "text-orange-400"
												: "text-gray-600"
										}`}
									>
										★
									</span>
								))}
							</div>
						</div>
						<p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
							{review.text}
						</p>
						<p className="text-gray-400 text-xs md:text-sm font-semibold">
							— {review.author}
						</p>
					</div>
				))}
			</div>
		</motion.section>
	);
};
