import { MotionConfig } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { SocialBar } from "../components/SocialBar";
import { Hero } from "../components/Hero";
import { FeatureCarousel } from "../components/FeatureCarousel";
import { About } from "../components/About";
import { Gallery } from "../components/Gallery";
import { Programs } from "../components/Programs";
import { Trainers } from "../components/Trainers";
import { Membership } from "../components/Membership";
import { Testimonials } from "../components/Testimonials";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <SocialBar />
      <main>
        <Hero />
        <FeatureCarousel />
        <About />
        <Gallery />
        <Programs />
        <Trainers />
        <Membership />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
