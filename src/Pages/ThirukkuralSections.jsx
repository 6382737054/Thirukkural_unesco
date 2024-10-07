import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Coins, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThirukkuralSectionsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    en: {
        title: "The Three Sections of Thirukkural",
        subtitle: "Exploring the Timeless Wisdom of Thiruvalluvar",
        intro: "Thirukkural, a classic Tamil text composed by the poet-saint Thiruvalluvar, is a comprehensive guide to virtue, wealth, and love. Its 1,330 couplets are divided into three sections, each focusing on a fundamental aspect of human life.",
        sections: [
          {
            title: "Aram (Virtue)",
            icon: <BookOpen className="w-12 h-12 text-green-600" />,
            description: "This section deals with moral values and righteous living. It covers topics such as domestic life, ascetic virtue, fate, and more.",
            couplets: "Contains 380 couplets across 38 chapters.",
            keyTopics: ["Personal Integrity", "Family Life", "Social Responsibility", "Ethical Conduct"],
            route: "/aram"
          },
          {
            title: "Porul (Wealth)",
            icon: <Coins className="w-12 h-12 text-yellow-600" />,
            description: "This section focuses on political and economic matters. It discusses kingship, ministers, country, fort, army, friendship, and more.",
            couplets: "Comprises 700 couplets in 70 chapters.",
            keyTopics: ["Governance", "Economic Prosperity", "Diplomacy", "Military Strategy"],
            route: "/porul"
          },
          {
            title: "Inbam (Love)",
            icon: <Heart className="w-12 h-12 text-red-600" />,
            description: "This section explores the theme of love and relationships. It delves into mental union, enjoyment of love, and the pain of separation.",
            couplets: "Consists of 250 couplets in 25 chapters.",
            keyTopics: ["Romantic Love", "Marital Harmony", "Emotional Intelligence", "Human Connection"],
            route: "/inbam"
          }
        ],
        historicalContext: "Thirukkural, believed to have been written between the 3rd and 1st centuries BCE, has played a significant role in shaping Tamil literature and culture. Its universal messages have earned it the moniker 'Ulaga Podhu Marai' (Universal Scripture).",
        globalInfluence: "The Thirukkural has been translated into over 40 languages and continues to influence thinkers, leaders, and scholars worldwide. Its practical wisdom remains relevant in addressing contemporary ethical, social, and personal challenges.",
        learnMore: "Explore Chapter",
        readMore: "Read More"
    },
    ta: {
        title: "திருக்குறளின் மூன்று பிரிவுகள்",
        subtitle: "திருவள்ளுவரின் காலத்தை வென்ற ஞானத்தை ஆராய்தல்",
        intro: "திருக்குறள், கவிஞர்-துறவி திருவள்ளுவரால் இயற்றப்பட்ட கிளாசிக் தமிழ் நூல், அறம், பொருள் மற்றும் இன்பத்திற்கான விரிவான வழிகாட்டியாகும். இதன் 1,330 குறட்பாக்கள் மூன்று பிரிவுகளாகப் பிரிக்கப்பட்டுள்ளன, ஒவ்வொன்றும் மனித வாழ்க்கையின் ஒரு அடிப்படை அம்சத்தை மையமாகக் கொண்டுள்ளது.",
        sections: [
          {
            title: "அறம்",
            icon: <BookOpen className="w-12 h-12 text-green-600" />,
            description: "இந்தப் பிரிவு அறநெறி மற்றும் நேர்மையான வாழ்க்கையைப் பற்றி பேசுகிறது. இது வீட்டு வாழ்க்கை, துறவற நெறி, விதி போன்ற தலைப்புகளை உள்ளடக்கியது.",
            couplets: "38 அதிகாரங்களில் 380 குறட்பாக்களைக் கொண்டுள்ளது.",
            keyTopics: ["தனிப்பட்ட நேர்மை", "குடும்ப வாழ்க்கை", "சமூகப் பொறுப்பு", "நெறிமுறை நடத்தை"],
            route: "/aram"
          },
          {
            title: "பொருள்",
            icon: <Coins className="w-12 h-12 text-yellow-600" />,
            description: "இந்தப் பிரிவு அரசியல் மற்றும் பொருளாதார விவகாரங்களை மையமாகக் கொண்டுள்ளது. இது அரசாட்சி, அமைச்சர்கள், நாடு, கோட்டை, படை, நட்பு போன்றவற்றை விவாதிக்கிறது.",
            couplets: "70 அதிகாரங்களில் 700 குறட்பாக்களைக் கொண்டுள்ளது.",
            keyTopics: ["ஆட்சி", "பொருளாதார செழிப்பு", "இராஜதந்திரம்", "இராணுவ தந்திரம்"],
            route: "/porul"
          },
          {
            title: "இன்பம்",
            icon: <Heart className="w-12 h-12 text-red-600" />,
            description: "இந்தப் பிரிவு அன்பு மற்றும் உறவுகளைப் பற்றி ஆராய்கிறது. இது மன ஒருமைப்பாடு, காதல் இன்பம், மற்றும் பிரிவின் வலி ஆகியவற்றை ஆழமாக ஆராய்கிறது.",
            couplets: "25 அதிகாரங்களில் 250 குறட்பாக்களைக் கொண்டுள்ளது.",
            keyTopics: ["காதல்", "திருமண இணக்கம்", "உணர்ச்சி நுண்ணறிவு", "மனித உறவுகள்"],
            route: "/inbam"
          }
        ],
        historicalContext: "கி.மு. 3 முதல் 1 ஆம் நூற்றாண்டுகளுக்கு இடையில் எழுதப்பட்டதாக நம்பப்படும் திருக்குறள், தமிழ் இலக்கியம் மற்றும் கலாச்சாரத்தை வடிவமைப்பதில் முக்கிய பங்கு வகித்துள்ளது. இதன் உலகளாவிய செய்திகள் இதற்கு 'உலகப் பொதுமறை' என்ற பெயரைப் பெற்றுத் தந்துள்ளன.",
        globalInfluence: "திருக்குறள் 40க்கும் மேற்பட்ட மொழிகளில் மொழிபெயர்க்கப்பட்டுள்ளது மற்றும் உலகெங்கிலும் உள்ள சிந்தனையாளர்கள், தலைவர்கள் மற்றும் அறிஞர்களை தொடர்ந்து பாதிக்கிறது. இதன் நடைமுறை ஞானம் சமகால நெறிமுறை, சமூக மற்றும் தனிப்பட்ட சவால்களை எதிர்கொள்வதில் தொடர்ந்து பொருத்தமானதாக உள்ளது.",
        learnMore: "அத்தியாயத்தை ஆராயுங்கள்",
        readMore: "மேலும் படிக்க"
    }
  };

  const t = content[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleExplore = (route) => {
    navigate(route);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-center text-gray-900 mb-4">{t.title}</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-center text-gray-600 mb-8">{t.subtitle}</motion.p>
        <motion.p variants={itemVariants} className="text-lg text-center text-gray-700 mb-12">{t.intro}</motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {t.sections.map((section, index) => (
            <motion.div
              key={index}
              className="section bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {section.icon}
              </motion.div>
              <h2 className="text-2xl font-semibold text-center mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <p className="text-sm text-gray-500 italic mb-4">{section.couplets}</p>
              <h3 className="text-lg font-semibold mb-2">Key Topics:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {section.keyTopics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <motion.button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleExplore(section.route)}
              >
                {t.learnMore}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Info className="w-6 h-6 mr-2 text-blue-500" />
            {language === 'en' ? 'Historical Context' : 'வரலாற்று சூழல்'}
          </h2>
          <p className="text-gray-700 mb-4">{t.historicalContext}</p>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Info className="w-6 h-6 mr-2 text-blue-500" />
            {language === 'en' ? 'Global Influence' : 'உலகளாவிய தாக்கம்'}
          </h2>
          <p className="text-gray-700">{t.globalInfluence}</p>
        </motion.div>

        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          {/* Additional content can be added here if needed */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThirukkuralSectionsPage;