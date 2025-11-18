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
  name: "Strength The Gym & Spa",
  tagline: "Largest & Best Gym in West Delhi",
  address: "Opposite HDFC Bank, Ganesh Nagar, Tilak Nagar, New Delhi, Delhi, 110018",
  phone: "+91 99686 81007",
  openingHours: "Mon–Sun: 5:00 AM – 11:30 PM",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=Strength+The+Gym+%26+Spa+Tilak+Nagar&output=embed",
  about:
    "Strength The Gym & Spa is a premium fitness center in West Delhi featuring high-quality, well-maintained machines, energetic classes like Zumba and Bhangra aerobics, and professional trainers. Women-owned, clean, motivating ambiance with online classes, on-site services, and modern amenities.",
  facilities: [
    { title: "Strength Training", description: "Racks, plates, selectorized machines, free weights." },
    { title: "Cardio Zone", description: "Treadmills, bikes, ellipticals, rowers for all levels." },
    { title: "Zumba Studio", description: "High-energy Zumba classes that keep you moving." },
    { title: "Bhangra Aerobics", description: "Fun, cultural cardio sessions to level up stamina." },
    { title: "Personal Training", description: "Certified, friendly trainers guiding proper form & plans." },
    { title: "Online Classes", description: "Train remotely with live and guided sessions." },
    { title: "Amenities", description: "Restrooms, Wi‑Fi (Free), clean and hygienic environment." },
    { title: "Payments", description: "Credit/Debit cards, Google Pay, NFC mobile payments accepted." },
    { title: "Parking", description: "Free parking lot and free street parking nearby." },
    { title: "Accessibility", description: "Wheelchair-accessible car park." },
  ],
  pricing: [
    { plan: "Monthly", amount: "₹1,499" },
    { plan: "Quarterly", amount: "₹3,999" },
    { plan: "Half-Yearly", amount: "₹7,499" },
    { plan: "Yearly", amount: "₹13,999" },
  ],
  trainers: [
    { name: "Head Coach", speciality: "Strength & Conditioning", image: "" },
    { name: "Group Instructor", speciality: "Zumba & Bhangra Aerobics", image: "" },
    { name: "Personal Trainer", speciality: "Weight Loss & Hypertrophy", image: "" },
  ],
  // Leave empty to use /assets/change/1.jpg..6.jpg or defaults from /assets/default/
  gallery: [],
  reviews: [
    {
      author: "Nikxajmxni",
      rating: 5,
      text:
        "Environment is amazing—clean, motivating, and comfortable. Machines are well-maintained and of high quality. Trainers are professional and friendly.",
    },
    {
      author: "Richa Jangid",
      rating: 5,
      text:
        "One of the best fitness experiences—clean, organized, and fully equipped whether weightlifting or cardio.",
    },
    {
      author: "Raman Saluja",
      rating: 5,
      text:
        "Unique classes like Bhangra aerobics and Zumba are not just workouts but super fun!",
    },
    { author: "Gurmeet Singh", rating: 5, text: "Very nice gym and trainers—highly recommended." },
    { author: "Arjun Kumar", rating: 5, text: "Best gym in the area, cooperative staff." },
    {
      author: "Pankaj Kapoor",
      rating: 5,
      text:
        "Best gym in Tilak Nagar. Great atmosphere and updated machines. Their Uttam Nagar branch looks good too.",
    },
  ],
  // Optional external links to show in About
  links: [
    { label: "Facebook", url: "https://facebook.com" },
    // Add more if available:
    // { label: "Instagram", url: "https://instagram.com/yourgym" },
    // { label: "Website", url: "https://yourgym.example.com" },
  ],
};
