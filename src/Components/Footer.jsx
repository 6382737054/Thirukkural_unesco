import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
      follow: "Follow Us on Social Media",
      quickLinks: "Quick Links",
      companyInfo: "We are dedicated to providing quality service and enhancing user experience.",
      accessibility: "Accessibility",
      foia: "Freedom of Information Act",
      noFearAct: "No FEAR Act Data",
      office: "Office of the Inspector General",
      performance: "Performance Reports",
      legal: "Legal"
    },
    ta: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      contact: "தொடர்பு கொள்ள",
      privacy: "தனியுரிமைக் கொள்கை",
      terms: "சேவை விதிமுறைகள்",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
      follow: "சமூக ஊடகங்களில் எங்களைப் பின்தொடரவும்",
      quickLinks: "குறுங்கூறுகள்",
      companyInfo: "நாங்கள் தரமான சேவையை வழங்க மற்றும் பயனர் அனுபவத்தை மேம்படுத்த முயற்சிக்கிறோம்.",
      accessibility: "அணுகல்தன்மை",
      foia: "தகவல் சுதந்திரச் சட்டம்",
      noFearAct: "நோ ஃபியர் சட்டத் தரவுகள்",
      office: "கண்காணிப்பாளர் நாயகத்தின் அலுவலகம்",
      performance: "செயல்திறன் அறிக்கைகள்",
      legal: "சட்டப்பூர்வ"
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Main Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="Images/tn-logo.png" alt="Government Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-gray-400 mb-4">{t.companyInfo}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook"><Facebook size={20} color="#4267B2" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter"><Twitter size={20} color="#1DA1F2" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram"><Instagram size={20} color="#C13584" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn"><Linkedin size={20} color="#0077B5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">{t.home}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">{t.about}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">{t.contact}</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-300">{t.accessibility}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">{t.privacy}</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">{t.terms}</Link></li>
              <li><Link to="/foia" className="text-gray-400 hover:text-white transition-colors duration-300">{t.foia}</Link></li>
              <li><Link to="/no-fear-act" className="text-gray-400 hover:text-white transition-colors duration-300">{t.noFearAct}</Link></li>
            </ul>
          </div>

          {/* Other Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/inspector-general" className="text-gray-400 hover:text-white transition-colors duration-300">{t.office}</Link></li>
              <li><Link to="/performance" className="text-gray-400 hover:text-white transition-colors duration-300">{t.performance}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-2 md:mb-0">
              © {new Date().getFullYear()} Official Government Website. {t.rights}.
            </p>
            <div className="text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300 mr-4">{t.privacy}</Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">{t.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;