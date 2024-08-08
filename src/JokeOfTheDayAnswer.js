import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function JokeOfTheDayAnswer() {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1);
    };
  
    return (
      <div className="Answer-header">
        <div className="Text-container">
          <h1>Joke of the Day Answer</h1>
          <p className="Answer-text">13</p>
          <button onClick={goBack} className="App-button">
            Back
          </button>
        </div>
      </div>
    );
  }

export default JokeOfTheDayAnswer;
