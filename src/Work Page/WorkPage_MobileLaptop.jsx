import React from 'react'
import WorkPageDetails from './WorkPage'
import HomepageMobile from '../Home Page/HomePage_Mobile'
import WorkPage from './work'
import WorkPage_Mobile from './WorkPage_Mobile'

export default function WorkPage_MobileLaptop() {
   return (
      <div className='homebody' >
          <div className="dbxbvdbvjdv" style={{width: '100vw', height: '100vh'}}> 
          {/* laptop */}
               <WorkPageDetails/>
          </div>
          <div className="dfjdfjjf" style={{width: '100vw', height: '100vh'}}> 
          {/* mobile */}
               <WorkPage_Mobile/>
          </div>
      </div>
    )
}
