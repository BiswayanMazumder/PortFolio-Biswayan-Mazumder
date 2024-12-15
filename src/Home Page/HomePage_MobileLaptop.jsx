import React from 'react'
import Homepage from './homepage'
import HomepageMobile from './HomePage_Mobile'

export default function HomePage_MobileLaptop() {
  return (
    <div className='homebody' >
        <div className="dbxbvdbvjdv" style={{width: '100vw', height: '100vh'}}> 
        {/* laptop */}
             <Homepage/>
        </div>
        <div className="dfjdfjjf" style={{width: '100vw', height: '100vh'}}> 
        {/* mobile */}
             <HomepageMobile/>
        </div>
    </div>
  )
}
