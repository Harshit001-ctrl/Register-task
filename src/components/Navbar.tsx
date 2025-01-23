import { FC } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";

const Navbar: FC = () => {
  return (
    <>
      <nav className="bg-blue-900 px-4 py-3">
        <div className="container mx-auto flex justify-end items-center">
          <div className="text-white flex items-center gap-8">
            <a
              href="mailto:example@email.com"
              className="inline-flex items-center hover:text-blue-200 transition-colors"
            >
              <FaEnvelope className="mr-2" />
              <span>example@email.com</span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="tel:+12345678900"
              className="inline-flex items-center hover:text-blue-200 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span>+1 234 567 8900</span>
            </a>
            <span className="text-gray-400">|</span>
          </div>

          <div className="flex  space-x-4 text-white ml-8">
            <a
              href="#"
              className="hover:text-blue-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </nav>

      <nav className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          
          <div className="text-2xl font-bold text-blue-900 px-5 flex items-center">
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=48&q=75" alt="Register Karo Logo" className="h-15" />
            <span>Register Karo</span>
          </div>
          <div className="flex justify-center ml-auto space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-900">
              Home
            </a>

            <div className="relative group">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 inline-flex items-center"
              >
                Our Services
                <FaChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-900">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              Contact Us
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              About Us
            </a>
          </div>

          <div className="flex items-center space-x-6 ml-8">
            <button className="text-gray-700 hover:text-blue-900">
              <FaSearch className="h-5 w-5" />
            </button>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Talk to Expert
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
