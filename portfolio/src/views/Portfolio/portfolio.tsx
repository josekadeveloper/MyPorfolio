/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'

import AnimatedLetters from '../../components/AnimatedLetters/animated-letters'
import usePortfolioStore from '../../store/portfolio-store'
import { mockData } from '../../mocks/mock-data'

import './portfolio.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const { portfolio, setPortfolio } = usePortfolioStore()
  const [t] = useTranslation('global')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    setPortfolio(mockData)
  }

  const renderPortfolio = (portfolio) => {
    return (
      <section className="images-container">
        {portfolio.map((port) => (
          <div className="image-box" key={port.id}>
            <img src={port.image} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">{port.name}</p>
              <h4 className="description">{port.description}</h4>
              <button className="btn" onClick={() => window.open(port.url)}>
                {t('portfolio.view')}
              </button>
            </div>
          </div>
        ))}
      </section>
    )
  }

  return (
    <>
      <section className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t('portfolio.name').split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </section>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Portfolio
