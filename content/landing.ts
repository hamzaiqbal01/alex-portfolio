export const landingNav = {
  logoName: "Dr. Alexander Takshyn",
  logoTitle: "Oral & Maxillofacial Surgery",
} as const;

export const landingHero = {
  eyebrow: "Oral & Maxillofacial Surgery",
  nameLine1: "Dr. Alexander",
  nameLine2: "Takshyn",
  subtitle: "DMD — Oral and Maxillofacial Surgery\nBroward Health · Penn Dental Medicine Graduate",
  ctaHref: "#services",
  ctaLabel: "Explore Services",
} as const;

export const landingServices = {
  label: "Specializations",
  titleBefore: "Clinical ",
  titleEm: "Expertise",
  description:
    "From single-tooth replacement to full-arch reconstruction, Dr. Alex brings academic excellence and level-1 trauma experience to every case.",
  items: [
    {
      num: "01",
      title: "All-on-X & Dental Implant Placement",
      text: "Complex All-on-X and Dental Implant placement. Whether you're replacing a single tooth or seeking full mouth rehabilitation with a fixed prosthetic, Dr. Alex is trained for even the most medically complex cases.",
      imageSrc:
        "https://images.unsplash.com/photo-1588776814546-1ffbb083f99a?w=700&q=80",
      imageAlt: "Dental Implants",
    },
    {
      num: "02",
      title: "Bone Grafting",
      text: "Dr. Alex is trained in a wide spectrum of bone graft techniques — from autologous harvests (tibial, iliac crest, calvaria, ramus/symphysis) to allografts, xenografts, sinus lifts, and guided bone regeneration for maxillofacial defects.",
      imageSrc:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=700&q=80",
      imageAlt: "Bone Grafting",
    },
    {
      num: "03",
      title: "Trauma & Maxillofacial Reconstruction",
      text: "Accidents happen, and Dr. Alex is here to guide you through it. With training at three Level 1 trauma centers — including a pediatric facility — he manages the most complex head and neck trauma and reconstruction cases.",
      imageSrc:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80",
      imageAlt: "Facial Trauma",
    },
  ],
} as const;

export const landingStats = [
  { num: "3", label: "Level 1 Trauma Centers", delayMs: 0 },
  { num: "2", label: "Surgical Internships", delayMs: 100 },
  { num: "DMD", label: "Penn Dental Medicine", delayMs: 200 },
  { num: "∞", label: "Patient-First Care", delayMs: 300 },
] as const;

export const landingAbout = {
  imageSrc:
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=900&q=80",
  imageAlt: "Dr. Alexander Takshyn",
  badgeTitle: "Alexander Takshyn",
  badgeSub: "DMD · Oral & Maxillofacial Surgeon",
  label: "About",
  titleLine1: "The Surgeon",
  titleItalic: "Behind the Care",
  quote:
    "He understands that the surgical chair is the last place you'd want to be — which is why he treats every patient like family.",
  closing:
    "Outside the OR, Dr. Alex loves spending time outdoors, working on cars, and being with friends and family.",
  credentials: [
    {
      title: "York University, Canada",
      detail: "BSc Kinesiology — Magna Cum Laude",
    },
    {
      title: "University of Pennsylvania School of Dental Medicine",
      detail: "DMD — Dean's Scholarship Recipient",
    },
    {
      title: "Broward Health",
      detail:
        "Oral & Maxillofacial Surgery Residency · Surgical ICU Training",
    },
  ],
} as const;

export const landingContact = {
  label: "Get in Touch",
  titleLine1: "Book a",
  titleItalic: "Consultation",
  note: "Whether you have a question about a procedure or are ready to schedule, Dr. Alex's team is here to help. Every consultation is handled with confidentiality and care.",
  items: [
    { type: "email" as const, label: "Email", value: "contact@dralextakshyn.com" },
    { type: "phone" as const, label: "Phone", value: "+1 (954) 000-0000" },
    {
      type: "location" as const,
      label: "Location",
      value: "Broward County, South Florida",
    },
  ],
  serviceOptions: [
    "All-on-X & Dental Implants",
    "Bone Grafting",
    "Trauma & Maxillofacial Reconstruction",
    "General Inquiry",
  ],
} as const;

export const landingFooter = {
  brand: "Dr. Alexander Takshyn",
  suffix: ", DMD · Oral & Maxillofacial Surgery",
} as const;
