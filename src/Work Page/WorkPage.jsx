import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function WorkPageDetails() {
    const [hoveredtab,sethoveredtab]=useState('WEBSITE');
    const [hover, setHover] = useState(false);
    return (
        <div className='webbody' style={{ backgroundColor: "white" }}>
            <div className="jdndv" style={{ top: '0' }}>
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
                <div className="ndnvdv" style={{ marginRight: '20px', width: '300px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='dnjndjn' style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <div>
                                Work
                            </div>
                            <div style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
                                •
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>
                        <div className='dnjndjn' style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <div>
                                About
                            </div>

                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='dnjndjn' style={{ fontSize: '15px' }}>
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
            <div className="nbbfvbfv">
                <div className="ndbvbfndvb" style={{display:'flex',flexDirection:'row',gap:'80px'}}>
                    <div className="bhfjvns" style={{width:'150px',fontSize:'20px',backgroundColor:hoveredtab=='WEBSITE'?'black':'white',color:hoveredtab=='WEBSITE'?'white':'black'}} onClick={()=>{
                        sethoveredtab('WEBSITE');
                    }}>
                    Websites
                    </div>
                    <div className="bhfjvns" style={{width:'150px',fontSize:'20px',backgroundColor:hoveredtab=='MOBILE'?'black':'white',color:hoveredtab=='MOBILE'?'white':'black'}} onClick={()=>{
                        sethoveredtab('MOBILE');
                    }}>
                    Mobile Apps
                    </div>
                </div>
            </div>
            {hoveredtab=='WEBSITE'?(<div className="hgvbb">
            
                <div className="dnfjndjn">
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistaride.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/17770576/17770576-uhd_2560_1440_24fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VistaRide
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistafeedd.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/4121864/4121864-hd_1280_720_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VistaFeedd
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistatubee.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/6447692/6447692-hd_1920_1080_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VidTube
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://luxelayers.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/8533112/8533112-uhd_2560_1440_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        LuxeLayers
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://luxelayers.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4" height={"300px"} width={"500px"} autoPlay muted loop />
                    </div>
                    <div className="kcmd">
                        CryptoBase
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px', paddingBottom: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://wingedword.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/854545/854545-hd_1920_1080_25fps.mp4" height={"300px"} width={"500px"} autoPlay muted loop />
                    </div>
                    <div className="kcmd">
                        WingedWords
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
            </div>):<></>}
        </div>
    )
}
