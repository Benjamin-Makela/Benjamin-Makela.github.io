import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import JokeOfTheDay from './JokeOfTheDay';
import JokeOfTheDayAnswer from './JokeOfTheDayAnswer';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/joke-of-the-day" element={<JokeOfTheDay />} />
      <Route path="/joke-of-the-day-answer" element={<JokeOfTheDayAnswer />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
