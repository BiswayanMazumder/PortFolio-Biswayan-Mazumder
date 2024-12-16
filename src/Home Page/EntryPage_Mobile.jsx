import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EntryPage_Mobile() {
    document.title = 'Biswayan Mazumder • Mobile Application & Web Developer';
    const [hover, setHover] = useState(false);

    // Reference to the Menu button and Menu text
    const menuRef = useRef(null);
    const [menuvisible, setmenuvisible] = useState(false);
    return (
        <div className='homebody'>
            {menuvisible ? <div className='slide-up-animation'>
                <div className="webbody" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '100vw', height: '100vh', overflow: 'hidden', cursor: 'pointer' }}>
                    <div className="dbvbdhv" onClick={() => setmenuvisible(false)}>
                        <svg fill="white" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 490 490">
                            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
                        </svg>
                    </div>
                    <div className="jdnvnv" style={{ color: 'grey', fontSize: '12px', position: 'relative', top: '200px' }}>
                        Navigation
                    </div>
                    <div className="divider" style={{ position: 'relative', top: '200px' }}></div>
                    <div className="mdnjndjv" style={{ position: 'absolute', top: '250px', left: '60px', fontSize: '40px' }}>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '50px' }}>Home •</li>
                            <li style={{ marginBottom: '50px' }}>Work</li>
                            <li style={{ marginBottom: '50px' }}>About</li>
                            <li style={{ marginBottom: '50px' }}>Contact</li>
                        </ul>
                    </div>
                </div>
            </div> : <></>}
            {
                !menuvisible ? (
                    <div className='slide-up-animation'>
                        <div className="bdvcbdbvh">
                            <div className="jdndv">
                                <Link
                                    style={{ textDecoration: 'none', color: 'white' }}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    to={'/'}
                                >
                                    <div
                                        className="ndnvdv"
                                        style={{ marginLeft: '20px' }}
                                    >
                                        {hover ? '© Biswayan Mazumder' : '© Code By Biswayan'}
                                    </div>
                                </Link>
                                <Link
                                    ref={menuRef} // Attach the ref here to detect visibility
                                    style={{ textDecoration: 'none', color: 'white' }}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}

                                >
                                    <div
                                        className="ndnvdv"
                                        style={{ marginRight: '20px' }}
                                        onClick={() => setmenuvisible(true)} >
                                        • Menu
                                    </div>
                                </Link>
                            </div>
                            <div className="jefbhhbsvcs" style={{ marginTop: '40vh' }}>
                                BISWAYAN MAZUMDER
                            </div>
                            <div>
                                <div className="kdnfndv" style={{ marginTop: '35vh', left: '50px', display: menuvisible ? 'none' : 'flex' }}>
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
                                <div className='dnjndjns' style={{ marginTop: '30vh', left: '50px', fontWeight: '500', display: menuvisible ? 'none' : 'flex' }}>
                                    Mobile App Developer
                                </div>
                                <div className='dnjndjnq' style={{ marginTop: '30vh', left: '50px', fontWeight: '500', display: menuvisible ? 'none' : 'flex' }}>
                                    Web Developer
                                </div>
                            </div>
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/e64edd025438449584ac6c481eafa22d.png" alt="Biswayan Mazumder" height={"100%"} width={'100%'} />
                        </div>
                        <div className="ndbvjdbnv">
                            <div className="bhbdnvjd" style={{ alignItems: 'center', flexDirection: 'column', gap: '50px' }}>
                                <div className="mdnvnd" style={{ width: '90vw', marginTop: '-52px', fontWeight: '400', fontSize: '18px', lineHeight: '30px' }}>
                                    I craft seamless digital experiences that make an impact.
                                    Let’s push the boundaries and set new standards together.
                                    No gimmicks, just clean, cutting-edge solutions.
                                </div>
                                <div className="mdnvnd" style={{ width: '90vw', marginTop: '5px', fontWeight: '400', fontSize: '15px', lineHeight: '30px' }}>
                                    The combination of my passion for design, code & interaction positions me in a unique place in the web and mobile design world.
                                </div>
                                <Link style={{ textDecoration: 'none', color: 'white' }}>
                                    <div className="about" style={{ marginTop: '-20px', height: '120px', width: '120px' }}>
                                        About Me
                                    </div>
                                </Link>
                            </div>
                            <div className="bdbdhv">
                                Recent Works
                            </div>
                            <div className="ffmnfnf">
                                <div className="dbhbvhbv">
                                    <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vistaride.png" alt="" height={"200px"} width={"90%"} style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                </div>
                                <div className='jehehhh'>
                                    VistaRide
                                </div>
                                <div className="divider" style={{ position: 'relative', top: '-100px', width: '90vw' }}></div>
                                <div className='jehehhh' style={{ top: '-120px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                    <div>
                                        Interaction, Design & Development
                                    </div>
                                    <div onClick={() => window.open("https://vistaride.vercel.app", "_blank")}>
                                        View Site
                                    </div>
                                </div>
                            </div>
                            <div className="ffmnfnf">
                                <div className="dbhbvhbv">
                                    <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vistafeedd.png" alt="" height={"200px"} width={"90%"} style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                </div>
                                <div className='jehehhh'>
                                    VistaFeedd
                                </div>
                                <div className="divider" style={{ position: 'relative', top: '-100px', width: '90vw' }}></div>
                                <div className='jehehhh' style={{ top: '-120px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                    <div>
                                        Interaction, Design & Development
                                    </div>
                                    <div onClick={() => window.open("https://vistafeedd.vercel.app", "_blank")}>
                                        View Site
                                    </div>
                                </div>
                            </div>
                            <div className="ffmnfnf">
                                <div className="dbhbvhbv">
                                    <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vidtubee.png" alt="" height={"200px"} width={"90%"} style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                </div>
                                <div className='jehehhh'>
                                    VidTube
                                </div>
                                <div className="divider" style={{ position: 'relative', top: '-100px', width: '90vw' }}></div>
                                <div className='jehehhh' style={{ top: '-120px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                    <div>
                                        Interaction, Design & Development
                                    </div>
                                    <div onClick={() => window.open("https://vidtubee.vercel.app", "_blank")}>
                                        View Site
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <></>
            }
        </div>
    );
}
