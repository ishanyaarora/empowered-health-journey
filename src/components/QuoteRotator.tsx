
import { useState, useEffect } from 'react';

const quotes = [
  "The greatest wealth is health.",
  "Self-care is not selfish. You cannot serve from an empty vessel.",
  "Your body hears everything your mind says.",
  "Health is a relationship between you and your body.",
  "The body achieves what the mind believes.",
  "Take care of your body. It's the only place you have to live.",
  "Wellness is the complete integration of body, mind, and spirit.",
  "To keep the body in good health is a duty.",
  "Happiness is the highest form of health.",
  "Prevention is better than cure."
];

const QuoteRotator = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Set initial quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    
    // Change quote every 10 seconds
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[newIndex]);
        setFade(true);
      }, 500);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-6 px-4">
      <p 
        className={`text-lg md:text-xl font-medium text-white text-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        "{currentQuote}"
      </p>
    </div>
  );
};

export default QuoteRotator;
