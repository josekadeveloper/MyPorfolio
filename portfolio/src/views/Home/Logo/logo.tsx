import React, { useEffect, useRef } from 'react'

import gsap from 'gsap-trial';

import Avatar from '../../../assets/logos/fotoportfolio.jpeg';

import './logo.scss'

const Logo = () => {

    const bgRef = useRef();

    useEffect(() => {

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img src={Avatar} alt="Avatar" />
        </div>
    )
}

export default Logo