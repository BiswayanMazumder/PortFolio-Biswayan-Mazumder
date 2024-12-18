import React from 'react'
import WorkPage_Mobile from '../Work Page/WorkPage_Mobile'
import AboutPageDetails from './AboutPages'
import AboutPage_Mobile from './AboutPage_Mobile'

export default function AboutPage_MobileLaptop() {
  return (
    <div className='homebody' >
              <div className="dbxbvdbvjdv" style={{width: '100vw', height: '100vh'}}> 
              {/* laptop */}
                   <AboutPageDetails/>
              </div>
              <div className="dfjdfjjf" style={{width: '100vw', height: '100vh'}}> 
              {/* mobile */}
                   <AboutPage_Mobile/>
              </div>
          </div>
  )
}
