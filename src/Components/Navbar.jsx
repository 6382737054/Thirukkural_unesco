import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const { language, toggleLanguage } = useLanguage();

  const location = useLocation();

  const content = {
    en: {
      marqueeText: 'Welcome to the Tamil Virtual Academy - Your digital library for Tamil literature and culture!',
      home: 'Home',
      about: 'About',
      repositories: 'Repositories',
      contact: 'Features', // Changed from 'Contact' to 'Features'
      title: "Thiruvalluvar's Tirukkural: Manuscripts Repository",
      subtitle: (<span>3<sup>rd</sup> - 1<sup>st</sup> Century BCE</span>),
      email: 'Email:',
      emailAddress: 'xyz@gmail.com',
      phone: 'Phone:',
      phoneNumber: '+91-1234567890',
      sections: 'Sections',
      section1: 'Aram',
      section2: 'Porul',
      section3: 'Inbam',
    },
    ta: {
      marqueeText: 'தமிழிணையம் - தமிழ்ப் புத்தகங்கள் மற்றும் கலாச்சாரத்திற்கு உங்களை வரவேற்கிறேன்!',
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      repositories: 'களஞ்சியங்கள்',
      contact: 'விருப்பங்கள்', // Changed from 'Contact' to 'Features'
      title: 'திருக்குறள்- கையெழுத்துப் பிரதிகள் களஞ்சியம்',
      subtitle: (<span>கிமு 3<sup>வது</sup> - 1<sup>வது</sup> ஆம் நூற்றாண்டு</span>),
      email: 'மின்னஞ்சல்:',
      emailAddress: 'xyz@gmail.com',
      phone: 'தொலைபேசி:',
      phoneNumber: '+91-1234567890',
      sections: 'பிரிவுகள்',
      section1: 'அறம்',
      section2: 'பொருள்',
      section3: 'இன்பம்',
    }
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'ta' : 'en';
    localStorage.setItem('preferredLanguage', newLanguage);
    toggleLanguage();
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString(language === 'ta' ? 'ta-IN' : 'en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
      }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== language) {
      toggleLanguage();
    }
  }, []);

  return (
    <header className="w-full">
      <div className="bg-[#30699c] py-1 px-4 flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm border-b border-[#4d82b1]">
        <div className="w-full sm:w-1/2 overflow-hidden mb-1 sm:mb-0">
          <marquee className="whitespace-nowrap font-mukta">{t.marqueeText}</marquee>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="font-mukta">{t.email} {t.emailAddress}</span>
          <span className="font-mukta">{t.phone} {t.phoneNumber}</span>
          <span className="font-mukta text-sm">{currentDateTime}</span>
        </div>
      </div>

      <div className="bg-[#30699c] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <img 
              src="/Images/tn-logo.png" 
              alt="Tamil Virtual Academy" 
              className="h-12 sm:h-20"
            />
            <div className="text-center">
              <h1 className="text-lg sm:text-4xl font-bold font-mukta ml-1">{t.title}</h1>
              <p className="text-xs sm:text-2xl pt-1 font-mukta ml-1">{t.subtitle}</p>
            </div>
            <div className="flex items-center">
              <img 
                src="/Images/tn-logo.png" 
                alt="Government of Tamil Nadu" 
                className="h-12 sm:h-20"
              />
              <span className="text-sm text-1xl ml-0 font-mukta">தமிழ் வளர்ச்சி துறை</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white text-black relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-2">
            <button
              className="sm:hidden text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
            <ul className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm`}>
              {[{ to: "/", label: t.home }, { to: "/about", label: t.about }, { to: "/repositories", label: t.repositories }, { to: "/contact", label: t.contact }].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className={`block py-2 px-4 hover:bg-[#aec6fa] text-center sm:text-left font-mukta ${location.pathname === item.to ? 'bg-[#847be2]' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <div
                  className="flex items-center py-2 px-4 hover:bg-[#aec6fa] text-center sm:text-left font-mukta cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {t.sections} <ChevronDown size={16} className="ml-1" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 sm:left-auto w-full sm:w-48 bg-white shadow-lg rounded-b-lg z-10">
                    <Link to="/section1" className="block py-2 px-4 hover:bg-[#aec6fa] font-mukta" onClick={() => setIsDropdownOpen(false)}>{t.section1}</Link>
                    <Link to="/section2" className="block py-2 px-4 hover:bg-[#aec6fa] font-mukta" onClick={() => setIsDropdownOpen(false)}>{t.section2}</Link>
                    <Link to="/section3" className="block py-2 px-4 hover:bg-[#aec6fa] font-mukta" onClick={() => setIsDropdownOpen(false)}>{t.section3}</Link>
                  </div>
                )}
              </li>
            </ul>

            <div className="flex items-center py-2 sm:py-0 ml-auto sm:ml-0">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  onChange={handleLanguageToggle} 
                  checked={language === 'ta'} 
                />
                <div className="relative">
                  <div className="block bg-gray-600 w-12 h-7 rounded-full"></div>
                  <div className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 ${language === 'ta' ? 'transform translate-x-full' : ''}`}></div>
                </div>
                <span className="ml-2 text-black text-sm font-mukta">{language === 'ta' ? 'En' : 'த'}</span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};  

export default Navbar;
