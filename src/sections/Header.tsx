import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-1 lg:gap-1.5 lg:p-1.5 border border-white/30 rounded-full bg-gradient-to-b from-[#1F2937] to-[#111827] shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.6)] backdrop-blur-lg">
        <a href="#home" className="nav-item">
          Home
        </a>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
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
      </nav>
    </div>
  );
};
