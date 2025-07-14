import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 z-15">
      <div className="max-w-7xl mx-auto flex flex-col  justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          {/* Name */}
          <div className="text-4xl font-bold mb-16 md:mb-0">Amal Raj R</div>
          <div className="text-2xl  mb-1 ">@2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
