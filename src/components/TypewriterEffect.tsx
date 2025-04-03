import { useEffect, useState } from 'react';

const phrases = [
  'Backend Developer',
  'Java',
  'Spring Boot',
  'Micro Services',
  'Docker',
  'AI'
];

export default function TypewriterEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, 2000); // Pause at the end
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}