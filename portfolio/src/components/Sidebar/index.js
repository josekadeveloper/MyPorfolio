import { useState } from 'react';
import { NavLink } from 'react-router';
import { useTranslation } from "react-i18next";

import LogoES from '../../assets/images/logoES.png';
import LogoEN from '../../assets/images/logoEN.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const { i18n } = useTranslation("global");

    return (
        <div className="nav-bar">
            <button onClick={() => i18n.changeLanguage("es")}><img className="logoES" src={LogoES} alt="es" /></button>
            <button onClick={() => i18n.changeLanguage("en")}><img className="logoEN" src={LogoEN} alt="en" /></button>
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink 
                    exact="true" activeclassname="active" to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true" activeclassname="active" className="about-link" to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true" activeclassname="active" className="portfolio-link" to="/portfolio"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true" activeclassname="active" className="contact-link" to="/contact"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className="close-icon"
                />
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/josekadeveloper"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jose-carlos-de-la-rosa-methvin-793236159/"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className="hamburger-icon"
            />
        </div>
    )
}

export default Sidebar