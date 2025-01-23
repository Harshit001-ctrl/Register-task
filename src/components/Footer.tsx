import { Facebook, Instagram, Apple } from 'lucide-react';

const footerSections = [
  {
    title: 'START A BUSINESS',
    links: ['Features', 'Solutions', 'Integrations', 'Enterprise', 'Solutions']
  },
  {
    title: 'GOVERNMENT REGISTRATION',
    links: ['Partners', 'Community', 'Developers', 'App', 'Blog']
  },
  {
    title: 'COMPLIANCE & TAX',
    links: ['Channels', 'Scale', 'Watch the Demo', 'Our Competition']
  },
  {
    title: 'BIS & CDSCO',
    links: ['About Us', 'News', 'Leadership', 'Media Kit']
  }
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Left Section - Text and Social Icons */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300 mb-4 sm:text-xl lg:text-2xl">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Apple className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-amber-400 font-semibold mb-4 text-xl sm:text-2xl">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white text-lg sm:text-xl transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="mt-16 text-center text-gray-300 text-sm sm:text-base">
          © 2024 Registerkaro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
