# Gym Website Template Generator

A reusable animated gym landing site built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. All gym-specific content is editable from a single file: `src/data/gym/content.ts`.

## Sections
Hero, About, Gallery, Facilities, Pricing, Reviews, Contact & Location.

## Quick Start
1. Clone repo
2. Install deps: `npm install`
3. Edit `src/data/gym/content.ts`
4. Run: `npm run dev`

## Content Editing
All text, images, pricing, trainers, reviews, gallery paths, and map embed URL live in:
`src/data/gym/content.ts`

## Fallback Gallery
If `gallery` is empty, default images under `public/assets/default/` are used.

## Images
- Put gym-specific gallery shots here: `public/assets/change/1.jpg` … `6.jpg`. Replace these any time without code changes.
- Default samples (used if no change images exist) go in `public/assets/default/`:
  - `girl1.jpg`, `girl2.jpg`, `boy1.jpg`, `boy2.jpg`
  - `trainer.jpg` (used if a trainer has no image)

The gallery priority is: `gymContent.gallery` → `assets/change/1..6.jpg` → default samples.

## File Structure (simplified)
public/
  assets/
    default/
src/
  components/
    Hero.tsx
    About.tsx
    Facilities.tsx
    Trainers.tsx
    Pricing.tsx
    Gallery.tsx
    Reviews.tsx
    Contact.tsx
  data/
    gym/content.ts
  pages/
    index.tsx
  styles/
    globals.scss
  utils/

## Animations
Framer Motion handles staged fade-ins, scroll reveals, and subtle hover scaling.

## License
MIT