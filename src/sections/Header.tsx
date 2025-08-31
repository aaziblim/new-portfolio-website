export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 lg:gap-1.5 lg:p-1 xl:p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a
          href="./contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 transition duration-300 inline-flex items-center gap-1 group"
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};
