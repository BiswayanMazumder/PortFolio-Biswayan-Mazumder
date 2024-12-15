import React from 'react'
import Entrypage from './Entrypage'
import EntryPage_Mobile from './EntryPage_Mobile'

export default function EntryPageMobileLaptop() {
    return (
        <div className='homebody'>
            <div className="dbxbvdbvjdv" style={{ width: '100vw', height: '100vh' }}>
                {/* laptop */}
                <Entrypage />
            </div>
            <div className="dfjdfjjf" style={{ width: '100vw', height: '100vh' }}>
                {/* mobile */}
                <EntryPage_Mobile />
            </div>
        </div>
    )
}
