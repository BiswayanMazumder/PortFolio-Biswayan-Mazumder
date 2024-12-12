import React, { useEffect, useState } from 'react';

export default function Homepage() {
    document.title='Biswayan Mazumder • Mobile Application & Web Developer'
    const [timeout,settimeout]=useState(false)
    const greetings = [
        "Hello",      // English
        "Hola",       // Spanish
        "Bonjour",    // French
        "Ciao",       // Italian
        "Hallo",      // German
        "Olá",        // Portuguese
        "こんにちは",    // Japanese
        "안녕하세요",    // Korean
        "你好",        // Chinese (Mandarin)
        "Привет",     // Russian
        "שלום",       // Hebrew
        "नमस्ते",     // Hindi
        "Merhaba",    // Turkish
        "สวัสดี",     // Thai
        "Hej",        // Swedish
        "سلام",       // Arabic
        "Olá",        // Brazilian Portuguese
        "Halló",      // Icelandic
        "Zdravo",     // Serbian
        "Kamusta",    // Filipino
        "Helo",       // Welsh
        "Sveiki",     // Latvian
        "Szia",       // Hungarian
      ];
      
  const [greetingtext, setGreetingtext] = useState(greetings[0]);
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setGreetingtext(greetings[index]);
      index = (index + 1) % greetings.length; // Loop through greetings array
      console.log('Index:', index);
      if(index==greetings.length-1){
        window.location.replace('/home')
    }
    }, 100); // 10 seconds interval
    console.log('Index:', index);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='webbody' style={{ backgroundColor: '#1C1D20', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      • {greetingtext}
    </div>
  );
}
