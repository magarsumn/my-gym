import { images } from "./images";

export const brand = {
  name: "FITNESS FOCUS",
  tagline: "BUILT FOR MORE.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "TRAIN DIFFERENT",
  headline: ["BUILD YOUR", "STRONGEST SELF."],
  subtext:
    "More than a gym. A space designed to help you move better, train harder, and become stronger.",
  primaryCta: "Explore the Gym",
  secondaryCta: "View Memberships",
};

export interface CarouselSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: "training-floor",
    eyebrow: "TRAINING FLOOR",
    title: "Built for serious training.",
    description:
      "An expansive floor equipped with premium machines and free-weight rigs, designed for focus and flow.",
    image: images.carousel.training,
  },
  {
    id: "strength-zone",
    eyebrow: "STRENGTH ZONE",
    title: "Power. Precision. Progress.",
    description:
      "Heavy-duty racks, platforms, and plates built to support every rep of your strength journey.",
    image: images.carousel.strength,
  },
  {
    id: "cardio",
    eyebrow: "CARDIO",
    title: "Push your limits.",
    description:
      "A dedicated cardio deck with skyline views, built to elevate endurance and mental clarity.",
    image: images.carousel.cardio,
  },
  {
    id: "functional-training",
    eyebrow: "FUNCTIONAL TRAINING",
    title: "Move better. Perform better.",
    description:
      "Open-format space for kettlebells, sleds, and movement work that transfers to real life.",
    image: images.carousel.functional,
  },
  {
    id: "recovery",
    eyebrow: "RECOVERY",
    title: "Train hard. Recover harder.",
    description:
      "Sauna, stretch zones, and recovery tools to keep you moving at your best, every session.",
    image: images.carousel.recovery,
  },
];

export const about = {
  headline: ["NOT JUST A GYM.", "A PLACE TO BECOME MORE."],
  body: "FITNESS FOCUS was built on a simple idea: training should feel intentional. Every corner of our space is designed to remove friction between you and progress — premium equipment, considered layout, and a community that pushes you further than you'd go alone.",
  stats: [
    { value: 5000, suffix: "+", label: "Sq Ft of Training Space" },
    { value: 50, suffix: "+", label: "Premium Machines" },
    { value: 20, suffix: "+", label: "Weekly Classes" },
    { value: 1000, suffix: "+", label: "Members" },
  ],
};

export interface GalleryItem {
  id: string;
  alt: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "strength-training", alt: "Member on the strength rig", image: images.gallery.strength },
  { id: "aerobic", alt: "Group aerobic class in session", image: images.gallery.aerobic },
  { id: "cardio", alt: "Cardio deck during a session", image: images.gallery.cardio },
  { id: "functional-training", alt: "Functional training with battle ropes", image: images.gallery.functional },
  { id: "free-weights", alt: "Free weights zone", image: images.gallery.freeWeights },
  { id: "recovery", alt: "Recovery and stretch area", image: images.gallery.recovery },
];

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const programs: Program[] = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Build strength and size with structured progressive training.",
    image: images.programs.muscleBuilding,
  },
  {
    id: "fat-loss",
    title: "Fat Loss",
    description: "Structured training designed to help you move, sweat and perform.",
    image: images.programs.fatLoss,
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
    image: images.programs.personalTraining,
  },
  {
    id: "functional-fitness",
    title: "Functional Fitness",
    description: "Build strength that translates into real movement.",
    image: images.programs.functionalFitness,
  },
];

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export const trainers: Trainer[] = [
  {
    id: "rabin-tamang",
    name: "Rabin Tamang",
    specialty: "Strength & Conditioning",
    bio: "Helping members build sustainable strength through intelligent, intent-driven training.",
    image: images.trainers.rabin,
  },
];

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    features: ["Gym access", "Locker access", "Free fitness assessment"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    features: ["Unlimited gym access", "Group classes", "Fitness assessment", "Sauna & recovery"],
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: 89,
    features: ["Everything in Pro", "Personal training", "Nutrition consultation", "Priority booking"],
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "james",
    quote: "The environment completely changed how I approach training.",
    name: "James Whitfield",
    detail: "Strength goal · Member for 2 years",
    image: images.testimonials.james,
  },
  {
    id: "sofia",
    quote: "I've never stuck with a program this long. Fitness Focus makes consistency feel effortless.",
    name: "Sofia Alvarez",
    detail: "Fat loss goal · Member for 1 year",
    image: images.testimonials.sofia,
  },
  {
    id: "marcus",
    quote: "The coaching here is on another level. It's precise, personal, and it works.",
    name: "Marcus Lee",
    detail: "Muscle building goal · Member for 3 years",
    image: images.testimonials.marcus,
  },
];

export const footerContact = {
  address: "Balkot, Bhaktapur",
  phone: "+1 (555) 012-3456",
  email: "hello@fitnessfocus.com",
  mapUrl:
    "https://www.google.com/maps/place/Fitness+Focus/@27.6660499,85.3634322,17z/data=!4m14!1m7!3m6!1s0x39eb1bb00d03ab55:0x59991cc49703b962!2sFitness+Focus!8m2!3d27.6660499!4d85.3660125!16s%2Fg%2F11n8l7gsbz!3m5!1s0x39eb1bb00d03ab55:0x59991cc49703b962!8m2!3d27.6660499!4d85.3660125!16s%2Fg%2F11n8l7gsbz",
  mapEmbedUrl: "https://www.google.com/maps?q=27.6660499,85.3660125&z=16&output=embed",
};

export const gymHours = [
  { label: "Morning", time: "5:00 AM – 10:30 AM" },
  { label: "Evening", time: "3:00 PM – 8:30 PM" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/fitnessfocus___/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100066992701353" },
  { label: "TikTok", href: "https://www.tiktok.com/@fitnessfocus2021" },
];
