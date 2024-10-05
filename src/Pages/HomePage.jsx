import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Book, Image, FileText, Download } from 'lucide-react';

const HomePage = () => {
  const { language } = useLanguage();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [quoteBackground, setQuoteBackground] = useState('from-green-100 to-yellow-100');

  const content = {
    en: {
      title: "Explore the Timeless Wisdom of Thirukkural",
      subtitle: '"Wisdom of the ages, captured in verses."',
      description: "Thirukkural, a timeless treasure of Tamil literature, is a profound anthology that delves deep into the moral, ethical, and philosophical foundations of human life. With its succinct and poetic verses, it offers invaluable wisdom on various aspects of life—be it virtue, wealth, or love—guiding individuals on how to lead a balanced and meaningful existence.",
      links: {
        repository: "Manuscripts Catalogue",
        publications: "Scholarly Publications",
        facsimiles: "High-Resolution Facsimiles",
        translations: "Annotated Translations",
      },
      quoteTitle: "Thirukkural of the Day",
    },
    ta: {
      title: "திருக்குறளின் காலமற்ற ஞானத்தை ஆராயுங்கள்",
      subtitle: '"யுகங்களின் ஞானம், வசனங்களில் பிடிபட்டது."',
      description: "தமிழ் இலக்கியத்தின் பொக்கிஷமான திருக்குறள், ஒழுக்கம், நெறிமுறைகள் மற்றும் மனித நிலை பற்றிய ஆழமான பார்வைகளை வழங்குகிறது. காலத்தையும் கலாச்சாரத்தையும் தாண்டிய ஞானத்தைக் கண்டறிய அதன் வசனங்களை ஆராயுங்கள்.",
      links: {
        repository: "கையெழுத்துப் பிரதிகள் பட்டியல்",
        publications: "அறிஞர்களின் வெளியீடுகள்",
        facsimiles: "உயர் தெளிவுத்திறன் பிரதிகள்",
        translations: "விளக்கக் குறிப்புகளுடன் கூடிய மொழிபெயர்ப்புகள்",
      },
      quoteTitle: "இன்றைய திருக்குறள்",
    }
  };

  const thirukkuralQuotes = [
    { ta: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு", en: "A, as its first of letters, every speech maintains;\nThe Primal Deity is first through all the world's domains." },
    { ta: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்", en: "What Profit have those derived from learning, if they worship not the good feet of Him who is possessed of pure knowledge?" },
    { ta: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்", en: "They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long above the worlds." },
    { ta: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல", en: "To those who meditate the feet of Him who is void of desire or aversion, evil shall never come." },
    { ta: "இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு", en: "The two-fold deeds that spring from darkness shall not adhere to those who delight in the true praise of God." },
    { ta: "பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்", en: "Those shall long prosper who abide in the faultless way of Him who has destroyed the five desires of the senses." },
    { ta: "தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது", en: "Anxiety of mind cannot be removed, except from those who are united to the feet of Him who is incomparable." },
    { ta: "அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது", en: "None can swim the sea of vice, but those who are united to the feet of that gracious Being who is a sea of virtue." },
    { ta: "கோளில் பொறியின் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை", en: "The head that worships not the feet of Him who is possessed of eight attributes, is as useless as a sense without the power of sensation." },
    { ta: "பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்", en: "None can swim the great sea of births but those who are united to the feet of God." }
  ];

  const quoteBackgrounds = [
    'from-indigo-100 to-purple-100',
    'from-green-100 to-teal-100',
    'from-red-100 to-pink-100',
    'from-cyan-100 to-blue-100',
    'from-violet-100 to-blue-200',
    'from-fuchsia-100 to-purple-300',
    'from-gray-100 to-blue-300',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => {
        const newQuote = (prevQuote + 1) % thirukkuralQuotes.length;
        setQuoteBackground(quoteBackgrounds[Math.floor(Math.random() * quoteBackgrounds.length)]);
        return newQuote;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const t = content[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#b5e4ec' }}>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start mt-12">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg" style={{ minHeight: '400px' }}>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{t.title}</h1>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 italic">{t.subtitle}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{t.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {Object.entries(t.links).map(([key, value]) => (
                  <a
                    key={key}
                    href="#"
                    className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 text-gray-800 font-semibold rounded shadow transition duration-300"
                  >
                    {key === 'repository' && <Book className="mr-2" size={20} />}
                    {key === 'publications' && <FileText className="mr-2" size={20} />}
                    {key === 'facsimiles' && <Image className="mr-2" size={20} />}
                    {key === 'translations' && <FileText className="mr-2" size={20} />}
                    {value}
                    <Download className="ml-2" size={20} />
                  </a>
                ))}
              </div>

              <div className={`bg-gradient-to-r ${quoteBackground} p-6 rounded-lg shadow-lg mb-8`}>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t.quoteTitle}</h3>
                <blockquote className="text-lg text-gray-700 italic">
                  {thirukkuralQuotes[currentQuote][language]}
                </blockquote>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img 
              src="Images/Home.png" 
              alt="Tirukkural Manuscripts"
              className="h-full w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 hover:animate-shake transition duration-300 object-cover opacity-90" // Adjust opacity for blending
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
