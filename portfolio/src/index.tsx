import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import { initializeEmailJS } from "./utils/email-service";

import global_es from "./locales/es.json";
import global_en from "./locales/en.json";

import App from './App';
import ErrorBoundary from './components/ErrorBoundary/error-boundary';

import './main.scss';

initializeEmailJS();

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
