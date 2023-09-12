import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(
            querySnapshot
            .docs.map((doc) => doc.data())
            .sort((a,b) => (a.timestamp > b.timestamp ? -1 : 1))
        );
    }

    const renderPorfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio"
                                />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >{t("portfolio.view")}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={t("portfolio.name").split("")}
                        idx={15}
                    />
                </h1>
                {<div>{renderPorfolio(portfolio)}</div>}
            </div>
            <Loader type="line-spin-fade-loader"/>
        </>
    );
}

export default Portfolio;