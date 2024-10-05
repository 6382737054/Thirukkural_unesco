import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Porul = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Porul (Wealth)",
      description: "Porul is the second section of Thiruvalluvar's Tirukkural, dealing with material well-being, politics, and the art of governance.",
      keyPoints: [
        "Principles of good governance and leadership",
        "The importance of economic prosperity",
        "Strategies for maintaining social order",
        "The role of diplomacy and warfare in statecraft"
      ]
    },
    ta: {
      title: "பொருள்",
      description: "பொருள் என்பது திருவள்ளுவரின் திருக்குறளின் இரண்டாவது பிரிவாகும், இது பொருள் நலன், அரசியல் மற்றும் ஆட்சிக் கலையைப் பற்றி பேசுகிறது.",
      keyPoints: [
        "நல்லாட்சி மற்றும் தலைமைத்துவத்தின் கோட்பாடுகள்",
        "பொருளாதார செழிப்பின் முக்கியத்துவம்",
        "சமூக ஒழுங்கைப் பேணுவதற்கான உத்திகள்",
        "அரசியலில் இராஜதந்திரம் மற்றும் போரின் பங்கு"
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

export default Porul;