import React, { useEffect, useState } from 'react';
import Entrypage from './Entrypage';

export default function Homepage() {
  document.title = 'Biswayan Mazumder • Mobile Application & Web Developer';

  const [timeout, setTimeout] = useState(false);
  const greetings = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Hallo", // German
    "Olá", // Portuguese
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好", // Chinese (Mandarin)
    "Привет", // Russian
    "שלום", // Hebrew
    "नमस्ते", // Hindi
    "Merhaba", // Turkish
    "สวัสดี", // Thai
    "Hej", // Swedish
    "سلام", // Arabic
    "Olá", // Brazilian Portuguese
    "Halló", // Icelandic
    "Zdravo", // Serbian
    "Kamusta", // Filipino
    "Helo", // Welsh
    "Sveiki", // Latvian
    "Szia", // Hungarian
  ];

  const [greetingText, setGreetingText] = useState(greetings[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setGreetingText(greetings[index]);
      index = (index + 1) % greetings.length; // Loop through greetings array
      if (index === greetings.length - 1) {
        setTimeout(true);
      }
    }, 100); // 0.1 seconds interval to change greetings

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    timeout ? (
      <div className="slide-up-animation">
        <Entrypage />
      </div>
    ) : (
      <div
        className="webbody"
        style={{
          backgroundColor: '#1C1D20',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        • {greetingText}
      </div>
    )
  );
}
