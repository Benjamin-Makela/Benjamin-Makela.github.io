import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function JokeOfTheDay() {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1);
    };
  
    return (
        <div className="Joke-header">
            <div className="Text-container">
            <h1>Joke of the Day</h1>
            <p>How many snakes were there?</p>
            <button onClick={goBack} className="App-button">
                Back
            </button>
            </div>
        </div>
        );
  }

export default JokeOfTheDay;
