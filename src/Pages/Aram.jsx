import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Ensure correct import
import { useLanguage } from '../context/LanguageContext';

const Aram = () => {
  const { language } = useLanguage();
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  const content = {
    en: {
      title: "Aram (Virtue)",
      description: "Aram, the first section of Thiruvalluvar's Tirukkural, is a comprehensive guide to ethical living and moral excellence. It forms the foundation of personal integrity and societal harmony.",
      sections: [
        {
          title: "Domestic Virtue",
          content: "This section emphasizes the importance of leading a righteous life within the family unit. It covers topics such as the duties of a householder, the significance of hospitality, and the value of raising virtuous children."
        },
        {
          title: "Ascetic Virtue",
          content: "Here, Thiruvalluvar explores the higher realms of spiritual and moral living. It discusses renunciation, compassion, and the path to ultimate enlightenment through ethical conduct."
        },
        {
          title: "Fate",
          content: "This intriguing segment delves into the concept of destiny and its interplay with personal actions. It encourages readers to ponder the balance between fate and free will in shaping one's life."
        },
        {
          title: "Social Responsibility",
          content: "Thiruvalluvar highlights the importance of community and social obligations. This section explores how individuals can contribute to societal well-being and the moral duties towards others."
        },
        {
          title: "Forgiveness",
          content: "This powerful concept encourages readers to practice forgiveness as a means of achieving inner peace and moral clarity. It discusses the virtues of letting go and the strength in compassion."
        },
      ],
      quote: "What is virtuous conduct? It is never destroying life, for killing leads to every other sin. - Kural 321",
      additionalQuotes: [
        "The best among us are those who are virtuous in their conduct. - Kural 481",
        "A person's true wealth is their character and virtue. - Kural 960"
      ],
      conclusion: "Aram serves as a timeless guide for ethical living, offering profound insights that resonate across cultures and generations."
    },
    ta: {
      title: "அறம்",
      description: "திருவள்ளுவரின் திருக்குறளின் முதல் பிரிவான அறம், நெறிமுறை வாழ்க்கை மற்றும் ஒழுக்க மேன்மைக்கான விரிவான வழிகாட்டியாகும். இது தனிப்பட்ட நேர்மை மற்றும் சமூக நல்லிணக்கத்தின் அடித்தளமாக அமைகிறது.",
      sections: [
        {
          title: "இல்லற அறம்",
          content: "இந்தப் பிரிவு குடும்ப அலகிற்குள் நேர்மையான வாழ்க்கை வாழ்வதன் முக்கியத்துவத்தை வலியுறுத்துகிறது. இது இல்லறத்தாரின் கடமைகள், விருந்தோம்பலின் முக்கியத்துவம், மற்றும் நல்லொழுக்கமுள்ள குழந்தைகளை வளர்ப்பதன் மதிப்பு போன்ற தலைப்புகளை உள்ளடக்கியது."
        },
        {
          title: "துறவற அறம்",
          content: "இங்கே, திருவள்ளுவர் ஆன்மீக மற்றும் ஒழுக்க வாழ்வின் உயர்ந்த களங்களை ஆராய்கிறார். இது துறவு, கருணை, மற்றும் நெறிமுறை நடத்தை மூலம் இறுதி ஞானோதயத்திற்கான பாதையை விவாதிக்கிறது."
        },
        {
          title: "ஊழ்",
          content: "இந்த சுவாரஸ்யமான பகுதி விதி என்ற கருத்தை ஆராய்ந்து, அது தனிப்பட்ட செயல்களுடன் எவ்வாறு தொடர்புடையது என்பதை விளக்குகிறது. ஒருவரின் வாழ்க்கையை வடிவமைப்பதில் விதி மற்றும் சுய விருப்பத்திற்கு இடையேயான சமநிலையை பற்றி சிந்திக்க வாசகர்களை ஊக்குவிக்கிறது."
        },
        {
          title: "சமூக பொறுப்பு",
          content: "திருவள்ளுவர் சமூக மற்றும் சமூக பணிகளின் முக்கியத்துவத்தை வலியுறுத்துகிறார். இந்தப் பிரிவு நம்மால் சமூக நலனை அடிக்கடி செலுத்த முடியுமென்றும், மற்றவர்களுக்கு மேற்கொள்ளவேண்டிய ஒழுக்க பணிகள் என்பதையும் ஆராய்கிறது."
        },
        {
          title: "மன்னிப்பு",
          content: "இந்த சக்திவாய்ந்த கருத்து வாசகர்களை உள்ளுணர்வையும் ஒழுக்க உறுதியையும் அடைவதற்கான வழியாக மன்னிப்பை நடைமுறைப்படுத்த ஊக்குவிக்கிறது. இது விடுவிப்பதன் முழுமை மற்றும் கருணையில் உள்ள வலிமையை விவாதிக்கிறது."
        },
      ],
      quote: "அறவினை யாதெனில் கொல்லாமை கோறல் பிறவினை எல்லாம் தரும். - குறள் 321",
      additionalQuotes: [
        "நல்லது நடக்கும் நம்மோடு நடக்கும். - குறள் 481",
        "ஒருவரின் உண்மையான செல்வம் அவரது ஒழுக்கமும் அறமும். - குறள் 960"
      ],
      conclusion: "அறம் நெறிமுறை வாழ்க்கைக்கான காலத்தால் அழியாத வழிகாட்டியாக செயல்படுகிறது, கலாச்சாரங்கள் மற்றும் தலைமுறைகளைக் கடந்து எதிரொலிக்கும் ஆழமான உள்ளுணர்வுகளை வழங்குகிறது."
    }
  };

  const t = content[language];

  // Create spring animations for each section and the blockquote
  const sectionSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
  });

  const blockquoteSpring = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 1200,
  });

  const conclusionSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });

  const additionalQuoteSpring = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    delay: 1800,
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8 bg-yellow-50">
      <h1 className="text-4xl font-bold mb-6 text-center">{t.title}</h1>
      <p className="text-xl mb-8 text-center max-w-3xl mx-auto">{t.description}</p>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {t.sections.map((section, index) => (
          <animated.div
            key={index}
            style={sectionSpring}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p>{section.content}</p>
          </animated.div>
        ))}
      </div>

      <animated.blockquote
        style={blockquoteSpring}
        className="text-2xl italic text-center mb-8 px-4 py-2 border-l-4 border-blue-500 bg-blue-100 rounded"
      >
        "{t.quote}"
      </animated.blockquote>

      <div className="text-center mb-8">
        {t.additionalQuotes.map((quote, index) => (
          <animated.p
            key={index}
            style={additionalQuoteSpring}
            className="text-lg italic mb-4"
          >
            "{quote}"
          </animated.p>
        ))}
      </div>

      <animated.p
        style={conclusionSpring}
        className="text-xl text-center max-w-3xl mx-auto"
      >
        {t.conclusion}
      </animated.p>
    </animated.div>
  );
};

export default Aram;
