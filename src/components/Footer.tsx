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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Apple className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-amber-400 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white text-lg transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-300 text-sm">
          © 2024 Registerkaro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;