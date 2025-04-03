import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AnimatedLetters from '../../components/AnimatedLetters/animated-letters';

import "./not-found-page.scss";

const NotFoundPage: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [t] = useTranslation("global");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
  }, []);

  return (
    <section className="not-found not-found-page">
      <h1>
      <AnimatedLetters
         letterClass={letterClass}
         strArray={t("not.found.page.info").split("")}
         idx={15} />
      </h1>
    </section>
  );
};

export default NotFoundPage;