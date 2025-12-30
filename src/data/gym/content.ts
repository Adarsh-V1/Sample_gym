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
  phone: string; // keep original single-phone for compatibility
  phones?: string[]; // new: multiple contact numbers
  logo?: string; // new: path to logo image
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
  name: "Scult Fit",
  tagline: "Scult Fit",
  address:
    "Chitra complex, In front of Kingdom of chess, above Natural beauty parlour, cross roads school road, New Navratan, Bhuwana, Udaipur, Rajasthan 313004",
  phone: "083023 72719",
  // Update phones array with both numbers
  phones: ["+91 99286 07314", "+91 80004 98021"],
  logo: "/assets/change/5.jpg",
  openingHours: "Opens 6:00 am · Closes 9:00 pm · Closed on Sunday",
  googleMapEmbedUrl:
    "https://www.google.com/maps/place/24%C2%B037'05.0%22N+73%C2%B041'48.0%22E/@24.6180515,73.6940804,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6180515!4d73.6966553?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Scult Fit is a modern fitness studio in Chitra Complex, Bhuwana. Open 6:00 AM — 9:00 PM; closed on Sundays. Certified trainers, clean equipment, and flexible memberships. Highly rated for friendly, attentive trainers and a welcoming atmosphere. Great for beginners and experienced athletes alike, offering excellent value and a supportive community.",
  facilities: [
    { title: "On-site services", description: "In-person classes and personal training." },
    { title: "Restroom", description: "Clean, well-maintained restrooms." },
    { title: "LGBTQ+ friendly", description: "Welcoming and inclusive environment." },
    { title: "Membership required", description: "Membership required to access the facility." },
    { title: "Parking", description: "Free street parking available." }
  ],
  pricing: [
    { plan: "Monthly", amount: "INR 1,500" },
    { plan: "Quarterly", amount: "INR 4,200" },
    { plan: "Yearly", amount: "INR 15,000" }
  ],
  trainers: [
    { name: "Head Coach", speciality: "Strength & Conditioning · Personal Training", image: "" },
    { name: "Senior Coach", speciality: "Cardio & Functional Training", image: "" }
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg",
    "/assets/change/4.jpg",
    "/assets/change/5.jpg" // logo also available in gallery
  ],
  reviews: [],
  links: [
    {
      label: "Directions",
      url: "https://www.google.com/maps/place/24%C2%B037'05.0%22N+73%C2%B041'48.0%22E/@24.6180515,73.6940804,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6180515!4d73.6966553?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    }
  ]
};
