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
  links?: { label: string; url: string }[];
}

export const gymContent: GymContent = {
  name: "Tough Tribes Fitness Madurai",
  tagline: "Tough Tribes Fitness Madurai · 4.9★ (849 Reviews)",
  address: "No-4, SBOA Colony 3rd St, Ponmeni, Chandragandhi Nagar, Madurai, Tamil Nadu 625016",
  phone: "08015203005",
  openingHours: "Open · Check for closing time",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=Tough+Tribes+Fitness+Madurai&output=embed",
  about:
    "Tough Tribes Fitness Madurai is a premier fitness center dedicated to transforming your physique and health. We offer a welcoming, motivating atmosphere with top-quality equipment and experienced trainers. Our unique Karla Kattai training program enhances muscle flexibility and physique development. Members enjoy online classes, outdoor training sessions in ventilated spaces, and personalized guidance from certified trainers. With friendly staff, clean facilities, and multiple payment options including Google Pay, we're the perfect choice for your fitness journey.",
  facilities: [
    { title: "Top Equipment", description: "Amazing array of modern, well-maintained machines for strength and cardio training." },
    { title: "Friendly Trainers", description: "Experienced trainers including Dinesh, Anju, and Angai providing personalized coaching and customized workout plans." },
    { title: "Karla Kattai Training", description: "Unique traditional flexibility training program for muscle development and physique shaping." },
    { title: "Clean & Hygienic", description: "Gym is consistently clean and maintained to the highest standards for member safety." },
    { title: "Outdoor Sessions", description: "Weekly outdoor training sessions in comfortable, ventilated spaces for fresh, motivating workouts." },
    { title: "Online Classes", description: "Flexible online training options for members who prefer remote workout sessions." },
    { title: "Welcoming Atmosphere", description: "Positive and encouraging environment that motivates consistency and member retention." },
    { title: "Gender-Neutral Restrooms", description: "Modern restroom facilities designed for all members with cleanliness prioritized." },
    { title: "Google Pay Accepted", description: "Convenient contactless payment option available for all transactions." },
    { title: "Membership Options", description: "Flexible membership plans tailored to individual fitness goals and schedules." },
  ],
  pricing: [
    { plan: "Monthly", amount: "₹1,500" },
    { plan: "Quarterly", amount: "₹4,000" },
    { plan: "Half-Yearly", amount: "₹7,500" },
    { plan: "Yearly", amount: "₹13,500" },
  ],
  trainers: [
    { name: "Dinesh", speciality: "Strength Training & Muscle Building", image: "" },
    { name: "Anju", speciality: "Personal Training & Form Guidance", image: "" },
    { name: "Angai", speciality: "Customized Workout Plans & Consistency Coaching", image: "" },
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg",
    "/assets/change/4.jpg",
  ],
  reviews: [
    {
      author: "Jeysri Malini",
      rating: 5,
      text: "I've been training here for two months, and the experience has been exceptional. My trainer, Anju, understands my body, recognises my potential, and guides me with the right balance of support and challenge. The gym is clean, hygienic, and has a very welcoming atmosphere. Overall, a fantastic place to work out."
    },
    {
      author: "Abi",
      rating: 5,
      text: "Best trainer I've worked with! Always encouraging, gives customised workout plans, and helps me stay consistent. I've seen great improvement in my fitness. I have lost nearly 7kgs in 2 months with trainer Angai. Highly recommended."
    }
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=Tough+Tribes+Fitness+Madurai" },
    { label: "Call", url: "tel:08015203005" },
  ],
};
