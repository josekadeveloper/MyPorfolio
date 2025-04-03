import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../../components/AnimatedLetters/animated-letters';

import './about.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [t] = useTranslation("global");

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    return (
        <>
            <section className="container about-page">
                <div className="text-zone2">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={t("about.about-me").split("")}
                            idx={15}
                        />                    
                    </h1>
                    <p>{t("about.about-1")}</p>
                    <p>{t("about.about-2")}</p>
                    <p>{t("about.about-3")}</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPhp} />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} />
                        </div>
                    </div>
                </div>
            </section>
            <Loader type="line-spin-fade-loader" />
        </>
    )
}

export default About