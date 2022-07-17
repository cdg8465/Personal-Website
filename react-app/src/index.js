import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PortfolioPage from "./PortfolioPage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <HomePage />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
