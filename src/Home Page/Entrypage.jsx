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
                <div className="jefbhhbsvcs">
                    BISWAYAN MAZUMDER
                </div>
                <div className="kdnfndv">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                        <title>arrow-up-right</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" strokeWidth="1.5">
                                <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12"></line>
                                </g>
                            </g>
                        </g>
                    </svg>

                </div>
                <div className='dnjndjns'>
                    Mobile App Developer
                </div>
                <div className='dnjndjnq'>
                    Web Developer
                </div>
                <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/e64edd025438449584ac6c481eafa22d.png" alt="hbdhbhb" height={"100%"} />
            </div>
            <div className="ndbvjdbnv"></div>
        </div>
    )
}
