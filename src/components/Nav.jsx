export default function Nav() {
  return (
    <nav className="flex justify-center pt-8 pb-16 ">
      <div className="flex items-center space-x-8 px-8 py-3 border border-gray-600 rounded-full backdrop-blur-sm bg-gray-800/30">
        <a
          href="#about"
          className="relative text-white  group"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="relative text-white  group"
        >
          Projects
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          className="relative text-white  group"
        >
          Skills
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="relative text-white  group"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
}
