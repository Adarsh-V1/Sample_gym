import Image from "next/image";
import { gymContent } from "@/data/gym/content";

const FALLBACK_IMAGES = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/change/4.jpg",
];

// Build list: prefer custom gallery, fill with fallback, ensure exactly 4
const images = [...(gymContent.gallery?.filter(Boolean) ?? []), ...FALLBACK_IMAGES].slice(0, 4);

export const Gallery = () => null;
