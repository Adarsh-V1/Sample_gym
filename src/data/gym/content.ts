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
  name: "LEGEND'S GYM (A/C)",
  tagline: "Your Premier Air-Conditioned Fitness Destination",
  address:
    "saibaba high school, Opp:, Iti circle, near V.K. HONDA BIKE SHOW ROOM, Hussain Miah Colony, Ravindra Nagar, Kadapa, Andhra Pradesh 516001",
  phone: "090323 26086",
  phones: ["+91 90323 26086"],
  logo: "/assets/change/5.jpg",
  openingHours: "Opens 5:30 am · Closes 9:00 am Mon",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5!2d78.8166!3d14.4666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI3JzU5LjgiTiA3OMKwNDgnNTkuOCJF!5e0!3m2!1sen!2sin!4v1234567890",
  about:
    "Welcome to LEGEND'S GYM (A/C), Kadapa's premier air-conditioned fitness destination. Located conveniently opposite Saibaba High School near ITI Circle, we offer a great atmosphere with pumped up energy vibes. Our gym features top-quality equipment and very approachable trainers who create an equally good environment for all fitness levels. Experience professional training in a comfortable, climate-controlled setting designed to help you achieve your fitness goals.",
  facilities: [
    { title: "Air-Conditioned", description: "Fully climate-controlled gym for comfortable workouts." },
    { title: "On-site services", description: "In-person classes and personal training." },
    { title: "Online classes", description: "Virtual training sessions available." },
    { title: "Restroom", description: "Clean, well-maintained restrooms." },
    { title: "Membership required", description: "Membership required to access the facility." },
    { title: "Parking", description: "Free parking lot, free street parking, and on-site parking available." },
    { title: "Payment Options", description: "Google Pay and other payment methods accepted." }
  ],
  pricing: [
    { plan: "Monthly", amount: "Contact for pricing" },
    { plan: "Quarterly", amount: "Contact for pricing" },
    { plan: "Yearly", amount: "Contact for pricing" }
  ],
  trainers: [
    { name: "Head Trainer", speciality: "Strength & Conditioning · Personal Training", image: "" },
    { name: "Fitness Coach", speciality: "Cardio & Functional Training", image: "" }
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg",
    "/assets/change/4.jpg"
  ],
  reviews: [
    {
      author: "Satisfied Customer",
      rating: 5,
      text: "Equipment is good and trainer is very approachable....equally good environment"
    },
    {
      author: "Gym Member",
      rating: 5,
      text: "Great atmosphere and pumped up energy vibes."
    },
    {
      author: "Regular Member",
      rating: 5,
      text: "Best air-conditioned gym in Kadapa! Modern equipment and professional trainers make every workout session enjoyable."
    },
    {
      author: "Fitness Enthusiast",
      rating: 4,
      text: "Excellent facilities with good parking options. The AC makes a huge difference during intense workouts."
    }
  ],
  links: [
    {
      label: "Directions",
      url: "https://maps.app.goo.gl/FeKZGQqj6yASCTpKA",
    }
  ]
};
