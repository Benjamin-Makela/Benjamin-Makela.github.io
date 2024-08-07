import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import JokeOfTheDay from './JokeOfTheDay';
import JokeOfTheDayAnswer from './JokeOfTheDayAnswer';
import Store from './Store';
import AboutUs from './AboutUs';
import Calendar from './Calendar';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/joke-of-the-day" element={<JokeOfTheDay />} />
      <Route path="/joke-of-the-day-answer" element={<JokeOfTheDayAnswer />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
