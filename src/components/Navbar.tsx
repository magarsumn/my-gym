import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { brand, navLinks } from "../data/gym";
import { Button } from "./ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/logo.jpg"
            alt={brand.name}
            className="h-10 w-10 object-cover"
          />
          <span className="font-display hidden text-xl font-semibold tracking-tight text-off-white sm:inline">
            {brand.name}
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "group relative text-sm font-medium transition-colors",
                    isActive ? "text-off-white" : "text-off-white/70 hover:text-off-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-off-white/40 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#membership" variant="primary" className="px-6 py-3 text-xs">
            Join Now
          </Button>
        </div>

        <motion.button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.5 }}
          className="text-off-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            style={{ transformOrigin: "top" }}
            className="origin-top overflow-hidden bg-ink/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/5 px-3 py-3 text-base font-medium text-off-white/85 transition-colors hover:bg-white/5 hover:text-off-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <Button
                  href="#membership"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
