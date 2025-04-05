import React from 'react';
import { Routes, Route } from 'react-router';


import { initializeEmailJS } from "./utils/email-service";

import Layout from './components/Layout/layout';
import Home from './views/Home/home';
import Contact from './views/Contact/contact';
import Portfolio from './views/Portfolio/portfolio';
import NotFoundPage from './views/NotFoundPage/not-found-page';

import './App.scss';

initializeEmailJS();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
