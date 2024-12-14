import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import ThreeJSShader from '../threejs';
export default function AboutPageDetails() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
    const containerRef3 = useRef(null);
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
                        <div className='dnjndjn' style={{ fontSize: '15px' }}>
                            Work
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>
                        <div className='dnjndjn' style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <div>
                                About
                            </div>
                            <div style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
                                •
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
            <div className="ehnjnd">
                <div className="dnjdnvjd">
                    Crafting innovative web and mobile app solutions that thrive in the digital world.
                </div>
                <div className="divider"></div>
                <div className="hdbcdbvsjc">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                        <title>arrow-up-right</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1019.000000, -279.000000)" stroke="#000000" strokeWidth="1.5">
                                <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12"></line>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <div className='whdhjhj'>
                        I have completed my B.Tech in Electronics and Communication Engineering from Vellore Institute Of Technology, Bhopal. I possess strong skills in web development using React, HTML, CSS, and JavaScript. Additionally, I have experience in mobile app development using Flutter. I enjoy transforming ideas into functional, user-friendly applications, and I have worked on various projects that have honed my skills in both web and mobile development.I enjoy turning ideas into functional and visually appealing web apps. I have gained considerable experience in various projects throughout my years of learning.
                        <div style={{ marginTop: '10px', color: 'grey', fontSize: '15px' }}>
                            <span className="animated-dots">Always Exploring<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
                        </div>
                    </div>
                    <div className="shcjc">
                        <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/e64edd025438449584ac6c481eafa22d.png" alt="hbdhbhb" height={"100%"} />

                    </div>
                </div>
                <br />
                <div className="divider"></div>
                <br />
                <div className="mdnjvndvn">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                        <title>arrow-up-right</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1019.000000, -279.000000)" stroke="#000000" strokeWidth="1.5">
                                <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12"></line>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span className="animated-dots">Skills I Use<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
                </div>
                <div className="mdnjvndvn" style={{ display: 'flex', flexDirection: 'row', gap: "20px", flexWrap: 'wrap' }}>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="black" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            HTML
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="black" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            CSS
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            JS
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 34 32" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path><path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            React
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            GitHub
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="80" width="80" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M256 48l240 416H16z"></path></svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            Vercel
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg width="64" height="64">
                            <g transform="matrix(.061615 0 0 .061615 -1.430818 -1.2754)">
                                <defs>
                                    <path id="A" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" />
                                </defs>
                                <clipPath id="B">
                                    <use xlinkHref="#A" />
                                </clipPath>
                                <g clipPath="url(#B)">
                                    <path d="M360.3 779.7L520 939.5 959.4 500H639.9z" fill="#39cefd" />
                                </g>
                                <defs>
                                    <path id="C" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" />
                                </defs>
                                <clipPath id="D">
                                    <use xlinkHref="#C" />
                                </clipPath>
                                <path clipPath="url(#D)" d="M639.9 20.7h319.5l-679 679.1L120.6 540z" fill="#39cefd" />
                                <defs>
                                    <path id="E" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" />
                                </defs>
                                <clipPath id="F">
                                    <use xlinkHref="#E" />
                                </clipPath>
                                <path clipPath="url(#F)" d="M520 939.5l119.9 119.8h319.5L679.8 779.7z" fill="#03569b" />
                                <defs>
                                    <path id="G" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" />
                                </defs>
                                <clipPath id="H">
                                    <use xlinkHref="#G" />
                                </clipPath>
                                <linearGradient id="I" gradientUnits="userSpaceOnUse" x1="566.635" y1="970.339" x2="685.65" y2="851.324">
                                    <stop offset="0" stopColor="#1a237e" stopOpacity=".4" />
                                    <stop offset="1" stopColor="#1a237e" stopOpacity="0" />
                                </linearGradient>
                                <path clipPath="url(#H)" d="M757 857.4l-77.2-77.7L520 939.5z" fill="url(#I)" />
                                <defs>
                                    <path id="J" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" />
                                </defs>
                                <clipPath id="K">
                                    <use xlinkHref="#J" />
                                </clipPath>
                                <g clipPath="url(#K)">
                                    <path d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z" fill="#16b9fd" />
                                </g>
                                <radialGradient id="L" cx="7824.659" cy="-2855.979" r="5082.889" gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fff" stopOpacity=".1" />
                                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                                </radialGradient>
                                <path d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" fill="url(#L)" />
                            </g>
                        </svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            Flutter
                        </div>
                    </div>
                    <div className="bdvbfjvbf">
                        <svg width="64" height="64" viewBox="-47.5 0 351 351" version="1.1" preserveAspectRatio="xMidYMid">
                            <defs>
                                <path d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z" id="path-1" />
                                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
                                    <feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1" />
                                    <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" />
                                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
                                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0" type="matrix" in="shadowInnerInner1" />
                                </filter>
                                <path d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z" id="path-3" />
                                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-4">
                                    <feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1" />
                                    <feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1" />
                                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
                                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1" />
                                </filter>
                            </defs>
                            <g>
                                <path d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z" fill="#FFC24A" />
                                <g>
                                    <use fill="#FFA712" fillRule="evenodd" xlinkHref="#path-1" />
                                    <use fill="#000000" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
                                </g>
                                <path d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z" fill="#F4BD62" />
                                <g>
                                    <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#path-3" />
                                    <use fill="#000000" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                                </g>
                                <polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584" />
                                <path d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268" fill="#FDE068" />
                                <path d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z" fill="#FCCA3F" />
                                <path d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z" fill="#EEAB37" />
                            </g>
                        </svg>
                        <div style={{ color: 'black', fontWeight: '500', marginTop: '30px' }}>
                            Firebase
                        </div>
                    </div>
                </div>
                <br />
                <div className="divider"></div>
                <br />
                <div className="mdnjvndvn">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                        <title>arrow-up-right</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1019.000000, -279.000000)" stroke="#000000" strokeWidth="1.5">
                                <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12"></line>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span className="animated-dots">I can help you with<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
                </div>
                <div className="ndjnjdnv">
                    {/* First container with its own ref */}
                    <div className="fnjvnfjv" ref={containerRef1}
                    >
                        <ThreeJSShader containerRef={containerRef1} />
                        <div className="mdnvd" style={{ color: "white", zIndex: '5', position: 'absolute' }}>
                            STEP 1
                        </div>
                        <div className="jhhvhv" style={{ color: "white", zIndex: '6', position: 'absolute', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ width: '50%', fontWeight: '700', fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>Requirement Gathering</center>
                            </div>
                            <div style={{ width: '70%', fontWeight: '500', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>We'll work together to define your website's/app's goals, audience, and features, ensuring a clear structure and navigation plan.</center>
                            </div>
                        </div>
                    </div>

                    {/* Second container with its own ref */}
                    <div className="fnjvnfjv" ref={containerRef2}>
                        <ThreeJSShader containerRef={containerRef2} />
                        <div className="mdnvd" style={{ color: "white", zIndex: '5', position: 'absolute' }}>
                            STEP 2
                        </div>
                        <div className="jhhvhv" style={{ color: "white", zIndex: '6', position: 'absolute', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ width: '50%', fontWeight: '700', fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>Development of Website/App</center>
                            </div>
                            <div style={{ width: '70%', fontWeight: '500', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>After finalizing the plan, I begin coding, keeping you updated at each stage, from concept to working app/software.</center>
                            </div>
                        </div>
                    </div>

                    {/* Third container with its own ref */}
                    <div className="fnjvnfjv" ref={containerRef3}>
                        <ThreeJSShader containerRef={containerRef3} />
                        <div className="mdnvd" style={{ color: "white", zIndex: '5', position: 'absolute' }}>
                            STEP 3
                        </div>
                        <div className="jhhvhv" style={{ color: "white", zIndex: '6', position: 'absolute', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ width: '50%', fontWeight: '700', fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>Testing & Deployment</center>
                            </div>
                            <div style={{ width: '70%', fontWeight: '500', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <center>I'll ensure your app is fully functional and bug-free, then deploy it live for users, making sure it's ready for real-world use.</center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
