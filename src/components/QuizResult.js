import React, { useContext } from 'react';
import './App.css'; // Import the CSS file
import { QuizContext } from '../contexts/QuizContext';

function QuizResult() {

    const { points, dispatch } = useContext(QuizContext)

    const passingScore = 50; // Define a passing threshold
    const resultMessage = points >= passingScore ? "Congratulations! You passed!" : "Better luck next time!";
    const resultClass = points >= passingScore ? "pass" : "fail";

    return (
        <div className="quiz-result-container">
            <h1 className="quiz-result-heading">Quiz Results</h1>
            <p className={`quiz-result-message ${resultClass}`}>{resultMessage}</p>
            <p className="quiz-result-score">Your Score: {points}</p>
            <button onClick={() => dispatch({ type: 'restart' })}>Restart</button>
        </div>
    );
}

export default QuizResult;

