import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function WorkPage_Mobile() {
    document.title = 'Biswayan Mazumder • Mobile Application & Web Developer';
    const [hover, setHover] = useState(false);
    const [subject, setSubject] = useState('Greetings');
    const [body, setBody] = useState('Hello, I wanted to reach out about...');
    const [hoveredtab, sethoveredtab] = useState('WEBSITE');
    const generateMailtoLink = () => {
        return `mailto:biswayanmazumder77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
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
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                                <li style={{ marginBottom: '50px' }}>Home</li>
                            </Link>
                            <li style={{ marginBottom: '50px' }}>Work •</li>
                            <li style={{ marginBottom: '50px' }}>About</li>
                            <li style={{ marginBottom: '50px' }} onClick={generateMailtoLink}>Contact</li>
                        </ul>
                    </div>
                </div>
            </div> : <></>}

            {
                !menuvisible ? (
                    <div className='slide-up-animation' style={{ overflowX: 'hidden' }}>
                        <div className="ndjvnjdvn" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Link
                                style={{ textDecoration: 'none', color: 'black' }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                to={'/'}
                            >
                                <div
                                    className="ndnvdv"
                                    style={{ marginLeft: '20px', fontSize: '15px' }}
                                >
                                    {hover ? '© Biswayan Mazumder' : '© Code By Biswayan'}
                                </div>
                            </Link>
                            <Link
                                style={{ textDecoration: 'none', color: 'black' }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <div
                                    className="ndnvdv"
                                    onClick={() => setmenuvisible(true)}
                                    style={{ marginRight: '20px', fontSize: '15px' }}
                                >
                                    • Menu
                                </div>
                            </Link>
                        </div>
                        <div className="ndbhbjh">
                            <div className={`bhfjvns ${hoveredtab === 'WEBSITE' ? 'active-tab' : ''}`} style={{ marginLeft: '30px', fontWeight: '500', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: hoveredtab == 'WEBSITE' ? 'white' : 'black' }} onClick={() => {
                                sethoveredtab('WEBSITE');
                            }}>
                                WEBSITES
                            </div>
                            <div className={`bhfjvns ${hoveredtab === 'MOBILE' ? 'active-tab' : ''}`} style={{ marginLeft: '30px', fontWeight: '500', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: hoveredtab == 'MOBILE' ? 'white' : 'black' }} onClick={() => {
                                sethoveredtab('MOBILE');
                            }}>
                                MOBILE APPS
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/17770576/17770576-uhd_2560_1440_24fps.mp4" height={'100%'} width={'100%'} fill style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv">
                                VistaRide
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://vistaride.vercel.app", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/4121864/4121864-hd_1280_720_25fps.mp4" height={'100%'} width={'100%'} fill style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv" style={{top:'960px'}}>
                                VistaFeedd
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://vistafeedd.vercel.app", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/6447692/6447692-hd_1920_1080_25fps.mp4" height={'100%'} width={'100%'}  style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv" style={{top:'1400px'}}>
                                VidTube
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://vidtubee.vercel.app", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/8533112/8533112-uhd_2560_1440_25fps.mp4" height={'100%'} width={'100%'} fill style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv" style={{top:'1850px'}}>
                                LuxeLayers
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://luxelayers.vercel.app", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4" height={'100%'} width={'100%'} fill style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv" style={{top:'2290px'}}>
                                CryptoForge
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://cryptoforge.vercel.app/", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="jdndjvn">
                            <div className="hhfbhvv">
                                <video src="https://videos.pexels.com/video-files/854545/854545-hd_1920_1080_25fps.mp4" height={'100%'} width={'100%'} fill style={{ borderRadius: '10px' }} autoPlay muted loop></video>
                            </div>
                            <div className="bdbdhvbv" style={{top:'2730px'}}>
                                WingedWords
                            </div>
                            <div className="divider" style={{ position: 'relative', top: '80px', width: '90vw' }}></div>
                            <div className='jehehhh' style={{ position: 'relative', top: '100px', fontSize: '12px', fontWeight: '400', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: "space-between" }}>
                                <div>
                                    Interaction, Design & Development
                                </div>
                                <div onClick={() => window.open("https://wingedword.vercel.app/", "_blank")}>
                                    View Site
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <></>
            }
        </div>
    )
}
