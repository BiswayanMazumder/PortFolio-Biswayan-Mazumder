import React, { useEffect, useState } from 'react'
import AboutPageDetails from './AboutPages';

export default function AboutPage() {
    const [movetodetails,setmovetodetails] =useState(false);
    document.title='Biswayan Mazumder • Mobile Application & Web Developer • About'
    useEffect(()=>{
        const interval=setInterval(()=>{
            setmovetodetails(true);
        },3000)
        return () => clearInterval(interval);
    });
    
  return (
   movetodetails?<div className="slide-up-animation">
           <AboutPageDetails />
         </div>: <div className='slide-up-animation'>
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
        • About
      </div>
    </div>
  )
}
