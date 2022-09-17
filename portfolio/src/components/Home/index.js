import LogoTitle from '../../assets/images/logo-letter.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import { useTranslation } from "react-i18next";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>{t("home.hello-1")}</span>
                        <span className={`${letterClass} _12`}>{t("home.hello-2")}</span>
                        <br />
                        <span className={`${letterClass} _13`}>{t("home.hello-3")}</span>
                        <span className={`${letterClass} _14`}>{t("home.hello-4")}</span>
                        <img src={LogoTitle} alt="developer" />
                            <AnimatedLetters letterClass={letterClass}
                            strArray={"osek".split("")}
                            idx={15} />
                        < br/>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={t("home.web-developer").split("")}
                            idx={19} />
                    </h1>
                    <h2>{t("home.fullstack-developer")}</h2>
                    <Link to="/contact" className="flat-button">{t("home.contact")}</Link>
                </div>
                <Logo />
            </div>
            <Loader type="line-spin-fade-loader" />
        </>
    )
}


export default Home