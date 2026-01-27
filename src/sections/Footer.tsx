import Link from "next/link";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import GithubIcon from "@assets/icons/github.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import RedditIcon from "@assets/icons/reddit.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/aaziblim", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/azizjibril", icon: LinkedinIcon },
  { label: "Twitter/X", href: "https://x.com/a_azizJibril", icon: TwitterIcon },
  { label: "Reddit", href: "https://www.reddit.com/user/azizjibril/", icon: RedditIcon },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Left side - Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-white/40">
              &copy; {currentYear} • Built with{" "}
              <span className="text-red-400">Grind</span> &{" "}
              <span className="text-amber-400">☕</span>
            </div>

          </div>

          {/* Center - Nav links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group size-10 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-emerald-400/10 hover:border-emerald-400/30 transition-all"
                title={social.label}
              >
                <social.icon className="size-5 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom easter egg section */}
        <div className="border-t border-white/5 py-4 text-center">
          <p className="text-white/20 text-xs">
            🔍 You found the footer! Achievement unlocked: <span className="text-emerald-400/60">Scroll Master</span>
          </p>
          <p className="text-white/10 text-[10px] mt-1 font-mono">
            {`/* If you're reading this, we should probably work together */`}
          </p>
        </div>
      </div>
    </footer>
  );
};
