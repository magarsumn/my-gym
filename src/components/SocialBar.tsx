import { Plus } from "lucide-react";
import { socialLinks } from "../data/gym";
import { socialIcons, InstagramIcon } from "./ui/SocialIcons";

export function SocialBar() {
  return (
    <div className="group fixed right-0 top-1/2 z-40 hidden w-12 -translate-y-1/2 flex-col items-end overflow-hidden transition-[width] duration-300 ease-out hover:w-44 lg:flex">
      <div className="flex h-12 w-full items-center border border-white/10 bg-ink">
        <span className="min-w-0 flex-1 overflow-hidden text-xs font-semibold tracking-[0.15em] whitespace-nowrap text-off-white uppercase opacity-0 transition-[padding,opacity] duration-300 ease-out group-hover:pl-4 group-hover:opacity-100">
          Follow Us On
        </span>
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
          <Plus size={18} className="text-off-white" />
        </span>
      </div>

      {socialLinks.map((social) => {
        const Icon = socialIcons[social.label] ?? InstagramIcon;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-full items-center border-x border-b border-white/10 bg-accent text-ink transition-colors duration-200 hover:bg-accent-bright"
          >
            <span className="min-w-0 flex-1 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-[padding,opacity] duration-300 ease-out group-hover:pl-4 group-hover:opacity-100">
              {social.label}
            </span>
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
              <Icon width={18} height={18} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
