import React from 'react';
import { Routes, Route } from 'react-router';


import { initializeEmailJS } from "./utils/email-service";

import Layout from './components/Layout/layout';
import Home from './views/Home/home';
import About from './views/About/about';
import Contact from './views/Contact/contact';
import Portfolio from './views/Portfolio/portfolio';
import Dashboard from './views/Dashboard/dashboard';

import './app.scss';
import NotFoundPage from './components/NotFoundPage/not-found-page';

initializeEmailJS();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
