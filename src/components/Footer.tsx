import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { brand, navLinks, footerContact, gymHours } from "../data/gym";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.jpg" alt={brand.name} className="h-14 w-14 object-cover" />
            <p className="mt-3 max-w-[220px] text-sm text-bone/70">{brand.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-bone/50 uppercase">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-bone/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-bone/50 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-bone/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href={footerContact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  {footerContact.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a href={`tel:${footerContact.phone}`} className="hover:text-accent">
                  {footerContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a href={`mailto:${footerContact.email}`} className="hover:text-accent">
                  {footerContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="flex flex-col gap-0.5">
                  {gymHours.map((slot) => (
                    <span key={slot.label}>
                      {slot.label}: {slot.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-bone/50 uppercase">
              Find Us
            </h3>
            <a
              href={footerContact.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block h-48 w-full overflow-hidden border border-white/10 grayscale contrast-125 brightness-90 transition-[filter] duration-500 ease-out hover:grayscale-0 lg:h-full lg:min-h-[180px]"
            >
              <iframe
                title={`${brand.name} location`}
                src={footerContact.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-bone/50">
          © 2026 {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
