import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:rajmaharjan0220@gmail.com"
            className="hover:text-red-400"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-center mt-4">
          &copy; {currentYear} Raj Kumar Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
