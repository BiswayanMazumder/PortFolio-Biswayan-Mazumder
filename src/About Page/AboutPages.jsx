import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AboutPageDetails() {
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
                        <div className='dnjndjn' style={{fontSize:'15px'}}>
                            Work
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>
                        <div className='dnjndjn' style={{fontSize:'15px',display:'flex',flexDirection:'column',position:'relative'}}>
                            <div>
                            About
                            </div>
                            <div style={{color:'black',display:'flex',justifyContent:'center'}}>
                            •
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='dnjndjn' style={{fontSize:'15px'}}>
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
            <div className="ehnjnd">
                <div className="dnjdnvjd">
                Crafting innovative web and mobile app solutions that thrive in the digital world.
                </div>
                <div className="divider"></div>
                {/* <div className="hdbvdbvjd">
                    
                </div> */}
            </div>
        </div>
    )
}
