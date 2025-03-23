import { useContext } from 'react';
import './App.css';
import { QuizContext } from '../contexts/QuizContext';

function StartScreen() {
    const { dispatch } = useContext(QuizContext)
    return (
        <div className="start-screen">
            <p className="start-title">Welcome to REACT QUIZ CENTER 🙂</p>
            <p className="start-subtitle">Hope you'll like it 💙</p>
            <button className="start-button" onClick={() => dispatch({ type: 'Go' })}>Start Quiz</button>
        </div>
    );
}

export default StartScreen;
