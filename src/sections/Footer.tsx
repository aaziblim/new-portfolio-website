import Link from "next/link";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/aaziblim", icon: "🐙" },
  { label: "LinkedIn", href: "www.linkedin.com/in/azizjibril", icon: "💼" },
  { label: "Twitter/X", href: "https://x.com/a_azizJibril", icon: "🐦" },
  { label: "Reddit", href: "https://www.reddit.com/user/azizjibril/", icon: "🤖" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip">
      {/* Top gradient border */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Left side - Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-white/40">
              &copy; {currentYear} • Crafted with{" "}
              <span className="text-red-400">❤️</span> &{" "}
              <span className="text-amber-400">☕</span>
            </div>
            <div className="text-white/20 text-xs font-mono hidden md:block">
              {`v1.0.0 • Built different™ • No bugs, only features`}
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
                <span className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
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
