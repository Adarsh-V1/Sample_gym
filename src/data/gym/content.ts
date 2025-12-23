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
  name: "The War House Gym (Rise & Grind)",
  tagline: "The War House Gym (Rise & Grind) - 4.8 (58 Reviews)",
  address: "164, Pragathi Enclave, Miyapur, Hyderabad, Telangana 500049",
  phone: "095400 41026",
  openingHours: "Open - Closes 9 pm",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=164+Pragathi+Enclave+Miyapur+Hyderabad+500049&output=embed",
  about:
    "The War House Gym (Rise & Grind) is a well-established fitness centre focused on effective physical transformation in a motivating environment. Conveniently located and well connected, the gym features modern equipment across two floors, multiple sanitization stations, and friendly, supportive staff. Appointments are available and the facility accepts debit cards, NFC mobile payments, and credit cards. A clean, well-organized space makes it easy to focus on your goals with personalised assistance when needed.",
  facilities: [
    { title: "Two Floors", description: "Spacious layout across two floors to avoid crowding and improve workout flow." },
    { title: "Modern Equipment", description: "A range of fairly new machines and free weights for strength and cardio." },
    { title: "Multiple Sanitizers", description: "Sanitizer stations placed throughout the gym to maintain hygiene." },
    { title: "Well Connected", description: "Easily accessible by road and well connected to local transport." },
    { title: "Friendly Staff", description: "Supportive staff and trainers focused on helping members achieve results." },
    { title: "Clean Restrooms", description: "Maintained hygiene standards in restrooms and changing areas." },
    { title: "Appointment Options", description: "Appointment-based sessions available for focused personal training." },
    { title: "Cashless Payments", description: "Accepts debit cards, NFC mobile payments, and credit cards." },
    { title: "Popular Times", description: "Often busy during early mornings and evenings—check peak times." },
    { title: "Support for Transformation", description: "Programs and guidance tailored for lasting physical transformation." },
  ],
  pricing: [
    { plan: "Monthly", amount: "INR 1,200" },
    { plan: "Quarterly", amount: "INR 3,300" },
    { plan: "Half-Yearly", amount: "INR 6,000" },
    { plan: "Yearly", amount: "INR 11,000" },
  ],
  trainers: [
    { name: "In-house Trainer Team", speciality: "Strength & Conditioning / Personal Training", image: "" },
    { name: "Head Coach", speciality: "Program Design & Transformation", image: "" },
    { name: "Support Staff", speciality: "Member Guidance & Safety", image: "" },
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg",
    "/assets/change/4.jpg",
  ],
  reviews: [
    {
      author: "Sumantra Chanda",
      rating: 5,
      text:
        "We are not that much used to accept any change. So any change / transformation is the most challenging part of our life. And when it is about physical transformation then it is like the most critical thing for anyone. Physical transformation ... Great support and environment here."
    },
    {
      author: "Siddhartha Mohta",
      rating: 5,
      text:
        "It's been quite some time I've been here in this gym. It's good and divided in two floors which doesn't make it look crowded. The equipment is good and fairly new. They have multiple sanitizers in place which is great in COVID times."
    }
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=164+Pragathi+Enclave+Miyapur+Hyderabad+500049" },
    { label: "Call", url: "tel:09540041026" },
  ],
};
