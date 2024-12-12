import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Entrypage() {
    document.title = 'Biswayan Mazumder • Mobile Application & Web Developer';
    const [hover, setHover] = useState(false);

    return (
        <div className='homebody'>
            <div className="bdvcbdbvh">
                <div className="jdndv">
                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <div
                            className="ndnvdv"
                            style={{ marginLeft: '20px' }}
                        >
                            {hover ? '© Biswayan Mazumder' : '© Code By Biswayan'}
                        </div>
                    </Link>
                    <div className="ndnvdv" style={{ marginRight: '20px', width: '300px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <div className='dnjndjn'>
                                Work
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <div className='dnjndjn'>
                                About
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <div className='dnjndjn'>
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
                <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/e64edd025438449584ac6c481eafa22d.png" alt="hbdhbhb" height={"100%"} />
            </div>
            <div className="ndbvjdbnv"></div>
        </div>
    )
}
