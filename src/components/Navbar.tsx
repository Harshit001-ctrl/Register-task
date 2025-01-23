import { FC, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-900 px-4 py-3">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-white flex items-center gap-4 sm:gap-8 flex-wrap">
            <a
              href="mailto:example@email.com"
              className="inline-flex items-center hover:text-blue-200 transition-colors"
            >
              <FaEnvelope className="mr-2" />
              <span className="hidden sm:inline">example@email.com</span>
            </a>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <a
              href="tel:+12345678900"
              className="inline-flex items-center hover:text-blue-200 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span className="hidden sm:inline">+1 234 567 8900</span>
            </a>
          </div>

          <div className="flex space-x-4 text-white mt-2 sm:mt-0">
            <a href="#" className="hover:text-blue-200" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-blue-200" aria-label="Facebook">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="hover:text-blue-200" aria-label="Twitter">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </nav>

      <nav className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 flex items-center">
            <img
              src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=48&q=75"
              alt="Register Karo Logo"
              className="h-10"
            />
            <span className="ml-2">Register Karo</span>
          </div>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 inline-flex items-center"
              >
                Our Services
                <FaChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">About Us</a>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-900">
              <FaSearch className="h-5 w-5" />
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Talk to Expert
            </button>
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-4 border-t pt-4">
            <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Our Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">About Us</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
