import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Inbam = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Inbam (Love)",
      description: "Inbam is the third section of Thiruvalluvar's Tirukkural, exploring the nature of love and human relationships.",
      keyPoints: [
        "The beauty and power of love",
        "The joys and sorrows of romantic relationships",
        "The importance of trust and mutual understanding",
        "The role of physical and emotional intimacy in love"
      ]
    },
    ta: {
      title: "இன்பம்",
      description: "இன்பம் என்பது திருவள்ளுவரின் திருக்குறளின் மூன்றாவது பிரிவாகும், இது அன்பின் இயல்பு மற்றும் மனித உறவுகளை ஆராய்கிறது.",
      keyPoints: [
        "அன்பின் அழகு மற்றும் சக்தி",
        "காதல் உறவுகளின் மகிழ்ச்சிகளும் துயரங்களும்",
        "நம்பிக்கை மற்றும் பரஸ்பர புரிதலின் முக்கியத்துவம்",
        "அன்பில் உடல் மற்றும் உணர்ச்சிபூர்வமான நெருக்கத்தின் பங்கு"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.description}</p>
      <h2 className="text-2xl font-semibold mb-2">{language === 'en' ? 'Key Points:' : 'முக்கிய அம்சங்கள்:'}</h2>
      <ul className="list-disc pl-5">
        {t.keyPoints.map((point, index) => (
          <li key={index} className="mb-2">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inbam;