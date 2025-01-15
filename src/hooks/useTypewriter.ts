import { useState, useEffect } from "react";

interface TypewriterConfig {
  startDelay?: number;
}

export const useTypewriter = (
  text: string,
  speed: number = 50,
  config: TypewriterConfig = {}
) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    setDisplayText("");

    if (config.startDelay === Infinity) {
      return;
    }

    const timeout = setTimeout(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, config.startDelay || 0);

    return () => clearTimeout(timeout);
  }, [text, speed, config.startDelay]);

  return { displayText, isTyping };
};
