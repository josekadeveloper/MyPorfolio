import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { useTranslation } from "react-i18next";

import emailjs from '@emailjs/browser';

import AnimatedLetters from '../../components/AnimatedLetters/animated-letters';
import { messagePopup } from "../../components/MessagePopup/message-popup";

import './contact.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [t] = useTranslation("global");
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_bdsh6zi',
                'template_1ldywuu',
                form.current,
                'Tnc07yLqTYcxPJ8-y'
            )
            .then(
                () => {
                    messagePopup(t("contact.success"), 'success');
                },
                () => {
                    messagePopup(t("contact.error"), 'error');
                }
            )
    }

    return (
    <>
        <section className="container contact-page">
            <div className="text-zone2">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={t("contact.contact-me").split("")}
                        idx={15} />
                </h1>
                <p>{t("contact.contact-1")}</p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder={t("contact.contact-name")} required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder={t("contact.contact-email")} required />
                            </li>
                            <li>
                                <input placeholder={t("contact.contact-subject")} type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder={t("contact.contact-message")} name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button2" value={t("contact.contact-send")} />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section><Loader type="line-spin-fade-loader" />
    </>
    )
}

export default Contact