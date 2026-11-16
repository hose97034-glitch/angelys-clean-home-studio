export const BUSINESS = {
  name: "Angely González Clean Services",
  tagline: "Clean Homes, Happy Days",
  supportingLine: "Clean Spaces • Fresh Living • Lasting Impressions",
  phone: "786-402-1347",
  phoneLink: "tel:+17864021347",
} as const;

export const SERVICES = [
  {
    name: "Residential Cleaning",
    note: "Everyday spaces, thoughtfully refreshed.",
    image: "showcase",
    number: "01",
  },
  {
    name: "Deep Cleaning",
    note: "A closer clean, from one room to the next.",
    image: "detail",
    number: "02",
  },
  {
    name: "Move-In / Move-Out",
    note: "A fresh start for the next chapter.",
    image: "hero",
    number: "03",
  },
  {
    name: "Post-Construction",
    note: "From finishing touches to ready-to-enjoy rooms.",
    image: "showcase",
    number: "04",
  },
  {
    name: "Carpet & Upholstery",
    note: "Care for the softer places you call home.",
    image: "detail",
    number: "05",
  },
] as const;

export const REELS = ["01", "02", "03"] as const;

export const TESTIMONIAL_PLACEHOLDERS = [
  { label: "Your first review", text: "Add a real client testimonial here." },
  { label: "Your next review", text: "Replace this placeholder with your own words." },
  { label: "Another kind word", text: "Your customers’ feedback can go here." },
] as const;