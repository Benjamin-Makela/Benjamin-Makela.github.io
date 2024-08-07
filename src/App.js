import React from 'react';
import { useNavigate } from 'react-router-dom';
import localImage from './images/seagull-header.jpg'; // Adjust the path as necessary
import './App.css';

function App() {
  const navigate = useNavigate();

  const goToJokePage = () => {
    navigate('/joke-of-the-day');
  };

  const goToJokeAnsPage = () => {
    navigate('/joke-of-the-day-answer');
  };

  return (
    <div className="App">
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
