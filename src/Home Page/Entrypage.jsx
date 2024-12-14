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
                        to={'/'}
                    >
                        <div
                            className="ndnvdv"
                            style={{ marginLeft: '20px' }}
                        >
                            {hover ? '© Biswayan Mazumder' : '© Code By Biswayan'}
                        </div>
                    </Link>
                    <div className="ndnvdv" style={{ marginRight: '20px', width: '300px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/work'}>
                            <div className='dnjndjn'>
                                Work
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/about'}>
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
                <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/e64edd025438449584ac6c481eafa22d.png" alt="Biswayan Mazumder" height={"100%"} />
            </div>
            <div className="ndbvjdbnv">
                <div className="bhbdnvjd">
                    <div className="mdnvnd">
                        I craft seamless digital experiences that make an impact.
                        Let’s push the boundaries and set new standards together.
                        No gimmicks, just clean, cutting-edge solutions.
                    </div>
                    <div className="dnjdn">
                        <div className="mdnv">
                            The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                        </div>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/about'}>
                            <div className="about">
                                About Me
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="recentworks">
                    <div className="jdnvnv" style={{ color: 'grey', fontSize: '12px' }}>
                        Recent work
                    </div>
                    <div className="divider"></div>
                    <div className="dnfjndjn">
                        <div className="dnndmvns">
                            <div
                                className="nndjvnjdvn"
                                onClick={() => window.open("https://vistaride.vercel.app", "_blank")}
                            >
                                View Site
                            </div>

                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vistaride.png" alt="" height={"300px"} width={"500px"} />
                        </div>
                        <div className="kcmd">
                            VistaRide
                        </div>
                        <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                            Interaction, Design & Development
                        </div>
                    </div>
                    <div className="divider" style={{ position: 'relative', top: '50px' }}></div>
                    <div className="dnfjndjn">
                        <div className="dnndmvns">
                            <div
                                className="nndjvnjdvn"
                                onClick={() => window.open("https://vistafeedd.vercel.app", "_blank")}
                            >
                                View Site
                            </div>

                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vistafeedd.png" alt="" height={"300px"} width={"500px"} />
                        </div>
                        <div className="kcmd" style={{ position: 'relative', top: '50px' }}>
                            VistaFeedd
                        </div>
                        <div className="kcmd" style={{ position: 'relative', fontSize: '15px', marginRight: '100px', top: '50px' }}>
                            Interaction, Design & Development
                        </div>
                    </div>
                    <div className="divider" style={{ position: 'relative', top: '100px' }}></div>
                    <div className="dnfjndjn" style={{ position: "relative", marginBottom: "50px" }}>
                    <div className="dnndmvns">
                            <div
                                className="nndjvnjdvn"
                                onClick={() => window.open("https://vidtubee.vercel.app", "_blank")}
                            >
                                View Site
                            </div>

                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/vidtubee.png" alt="" height={"300px"} width={"500px"} />
                        </div>
                        <div className="kcmd" style={{ position: 'relative', top: '100px' }}>
                            VidTube
                        </div>
                        <div className="kcmd" style={{ position: 'relative', fontSize: '15px', marginRight: '100px', top: '100px' }}>
                            Interaction, Design & Development
                        </div>
                    </div>
                    <div className="divider" style={{ position: 'relative', top: '100px' }}></div>
                </div>
                <div className="nnjdn">
                    <div className="bhfjvn">
                        More work
                    </div>
                </div>
            </div>
        </div>
    )
}
