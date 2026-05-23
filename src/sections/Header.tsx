"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If not on the homepage, let the standard link behavior route back to home
    if (window.location.pathname !== "/" && window.location.pathname !== "") {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update hash in URL without jumping
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      {/* 
        EXISTING NAVBAR CONTAINER - Material transformed into Apple visionOS Premium Liquid Glass.
        - bg-black/20 provides a dark, expensive translucent lens foundation.
        - backdrop-blur-xl and backdrop-saturate-150 mimic authentic optical material blur.
        - border-white/10 forms a sharp physical glass rim.
      */}
      <nav
        className="relative flex gap-1 p-1 lg:gap-1.5 lg:p-1.5 rounded-full overflow-hidden bg-black/20 border border-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
      >
        {/* Layer 1: Ambient Contrast Multiplier (darkens the backdrop slightly to enhance readability) */}
        <div className="absolute inset-0 rounded-full pointer-events-none bg-zinc-950/20 mix-blend-multiply z-0" />

        {/* Layer 2: 3D Double-Bevel Specular Edge Highlight (provides physical lens thickness) */}
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),inset_0_-1px_1.5px_rgba(0,0,0,0.6)] z-0" />

        {/* Layer 3: Directional Diagonal Gloss Sheet Reflection */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-white/8 via-transparent to-black/10 opacity-70 z-0" 
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Layer 4: Volumetric Radial Top Light (mimics light catching the curved top boundary) */}
        <div className="absolute inset-0 rounded-full pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_50%)] z-0" />

        {/* Layer 5: Fine Internal Physical Bezel Ring */}
        <div className="absolute inset-0 rounded-full pointer-events-none border border-white/5 z-0" />

        {/* Actual Content (Maintained layout, spacing, and navigation structure identically) */}
        <div className="relative z-10 flex gap-1 items-center justify-center">
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="nav-item-glass"
          >
            Home
          </a>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="nav-item-glass"
          >
            About
          </a>
          <a
            href="/#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="nav-item-glass"
          >
            Projects
          </a>
          <Button asChild variant="heroLight" size="nav">
            <Link
              href="./contact"
              className="group/button inline-flex items-center gap-1"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};
