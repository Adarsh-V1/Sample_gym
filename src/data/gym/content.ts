export interface GymTrainer {
  name: string;
  speciality: string;
  image: string;
}
export interface GymFacility {
  title: string;
  description: string;
}
export interface GymPricing {
  plan: string;
  amount: string;
}
export interface GymReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}
export interface GymContent {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  openingHours: string;
  googleMapEmbedUrl: string;
  about: string;
  facilities: GymFacility[];
  pricing: GymPricing[];
  trainers: GymTrainer[];
  gallery: string[];
  reviews: GymReview[];
  // New optional external links list
  links?: { label: string; url: string }[];
}

export const gymContent: GymContent = {
  name: "COPS FITNESS & GYM",
  tagline: "Discipline • Guidance • Inclusive High-Result Training (4.8★)",
  address: "Plot 4, Sector D, Slice 5, Part II, Scheme 78, Vijay Nagar, Indore, Madhya Pradesh 452010",
  phone: "+91 88238 00087",
  openingHours: "Mon–Sun: 6:00 AM – 10:00 PM",
  googleMapEmbedUrl: "https://www.google.com/maps?q=COPS+Fitness+%26+Gym+Indore+Vijay+Nagar&output=embed",
  about:
    "COPS FITNESS & GYM (कॉप्स फिटनेस & जिम) is a 4.8★ rated, LGBTQ+ friendly, women‑owned facility known for disciplined environment, knowledgeable & cooperative trainers, structured muscle gain and fat loss guidance, goal tracking support, and balanced motivating atmosphere. Offers online, outdoor, and on‑site services plus broad payment options (cheques, cards, Google Pay, NFC).",
  facilities: [
    { title: "Disciplined Training Culture", description: "Environment fostering dedication, structure, and daily consistency." },
    { title: "Trainer Guidance & Expertise", description: "Qualified coaches guiding form, progression, and individualized adjustments." },
    { title: "Equipment Variety", description: "Comprehensive free weights and strength accessories for multi-phase programs." },
    { title: "Machine Suite", description: "Maintained resistance & cardio machines supporting scalable workloads." },
    { title: "Motivating Atmosphere", description: "Positive energy, focused members, and supportive staff interactions." },
    { title: "Goal Tracking Support", description: "Progress checkpoints for strength, composition, and performance targets." },
    { title: "Diet & Basic Nutrition Help", description: "Foundational meal guidance aligned to body recomposition goals." },
    { title: "Cooperative Staff", description: "Approachable trainers & desk staff improving member experience." },
    { title: "Muscle Gain Programming", description: "Structured overload plans for hypertrophy and lean mass accrual." },
    { title: "Inclusive & Women-Owned", description: "LGBTQ+ friendly space with women‑owned leadership encouraging respect." },
    { title: "Service Options", description: "Online classes, outdoor training sessions, and on‑site coaching." },
    { title: "Payments (Cheques & Digital)", description: "Cheques, debit/credit cards, Google Pay & NFC mobile payments supported." },
    { title: "Restroom Amenity", description: "Maintained facilities for hygiene & comfort." },
  ],
  pricing: [
    { plan: "Monthly", amount: "₹1,499" },
    { plan: "Quarterly", amount: "₹4,199" },
    { plan: "Half-Yearly", amount: "₹7,799" },
    { plan: "Yearly", amount: "₹14,499" },
  ],
  trainers: [
    { name: "Lead Trainer", speciality: "Strength & Muscle Gain Programming", image: "" },
    { name: "Form & Mobility Coach", speciality: "Technique & Injury Prevention", image: "" },
    { name: "Nutrition Support Coach", speciality: "Basic Diet & Goal Alignment", image: "" },
  ],
  gallery: [],
  reviews: [
    {
      author: "Shraddha Verma",
      rating: 5,
      text: "Discipline, dedication, and right guidance—started with zero knowledge; trainers helped with workouts and diet consistently.",
    },
    {
      author: "Trainer Expertise",
      rating: 5,
      text: "Supportive certified guidance—clear form corrections and structured progression.",
    },
    {
      author: "Motivation & Goals",
      rating: 5,
      text: "Atmosphere keeps goals visible—easy to sustain effort over weeks.",
    },
    {
      author: "Cooperative Staff",
      rating: 5,
      text: "Staff helpful and approachable—questions solved quickly.",
    },
    {
      author: "Equipment & Machines",
      rating: 5,
      text: "Good mix of machines & free weights—supports varied training blocks.",
    },
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=COPS+Fitness+%26+Gym+Indore+Vijay+Nagar" },
    { label: "Call", url: "tel:+918823800087" },
  ],
};
