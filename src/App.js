import React from 'react';
import { useNavigate } from 'react-router-dom';
import localImage from './images/seagull-header.jpg'; 
import './App.css';
import NavBar from './NavBar';
import Store from './Store';
import AboutUs from './AboutUs';
import Calendar from './Calendar';

function App() {
  const navigate = useNavigate();

  const goToJokePage = () => {
    navigate('/joke-of-the-day');
  };

  const goToJokeAnsPage = () => {
    navigate('/joke-of-the-day-answer');
  };

  const goToStore = () => {
    navigate('/Store');
  };

  const goToAbout = () => {
    navigate('/AboutUs');
  };

  const goToCalendar = () => {
    navigate('/Calendar');
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={localImage} className="App-logo" alt="logo" />
        <p>
          Join The Seagull Club Today!!
        </p>
        <button onClick={goToJokePage} className="App-button">
          Joke of the Day
        </button>
        <button onClick={goToJokeAnsPage} className="App-button">
          Joke of the Day Answer
        </button>
      </header>
    </div>
  );
}

export default App;
