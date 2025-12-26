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
  name: "Evolution Gym and Fitness",
  tagline: "Evolution Gym and Fitness - 4.9 (97 Reviews)",
  address: "2nd floor, Sagarnidhi complex, Hosabettu, Kulai, Mangaluru, Karnataka 575019",
  phone: "077600 24061",
  openingHours: "Open · Closes 9 pm",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=2nd+floor+Sagarnidhi+complex+Hosabettu+Kulai+Mangaluru+Karnataka+575019&output=embed",
  about:
    "Evolution Gym and Fitness offers top-notch, well-maintained equipment and a motivating atmosphere. Trainers are friendly, knowledgeable, and ready to guide you with proper form. The gym provides a wide variety of cardio and strength equipment and supports members seeking serious fitness improvements.",
  facilities: [
    { title: "LGBTQ+ friendly", description: "Welcoming and inclusive environment." },
    { title: "Identifies as women-owned", description: "Women-owned business." },
    { title: "Online classes", description: "Remote workout options available." },
    { title: "Outdoor services", description: "Outdoor training sessions offered." },
    { title: "On-site services", description: "In-person classes and personal training." },
    { title: "Gender-neutral toilets", description: "Accessible restrooms for all members." },
    { title: "Restroom", description: "Well-maintained restrooms available." },
    { title: "Wi-Fi", description: "Free Wi‑Fi for members." },
    { title: "Paid Wi-Fi", description: "Higher-speed paid option available." },
    { title: "Swimming pool", description: "On-site swimming pool available." },
    { title: "Payments", description: "Google Pay and common digital payments accepted." }
  ],
  pricing: [
    { plan: "Monthly", amount: "INR 1,500" },
    { plan: "Quarterly", amount: "INR 4,200" },
    { plan: "Yearly", amount: "INR 15,000" }
  ],
  trainers: [
    { name: "Head Trainer", speciality: "Strength & Conditioning · Form coaching", image: "" },
    { name: "Senior Coach", speciality: "Cardio & Functional Training", image: "" }
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg",
    "/assets/change/4.jpg"
  ],
  reviews: [
    {
      author: "thripti jayaram",
      rating: 5,
      text:
        "I've been going to this gym for few months, and I absolutely love it. The equipment is top-notch and always clean. The trainer is super friendly and helpful, always around to give tips or correct your form. Highly recommend this place if you're serious about fitness."
    },
    {
      author: "Sony",
      rating: 5,
      text:
        "Overall, it’s a great place to work out. The equipment is well-maintained, the space is clean, and the variety of machines and free weights covers all fitness needs. Good range of cardio and strength equipment. Trainers are friendly and knowledgeable, always ready to guide you with proper form."
    }
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=2nd+floor+Sagarnidhi+complex+Hosabettu+Kulai+Mangaluru+Karnataka+575019" },
    { label: "Call", url: "tel:+917760024061" }
  ],
};
