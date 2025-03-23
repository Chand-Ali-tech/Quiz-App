import { useContext } from 'react';
import './App.css';
import Options from './Options';
import { QuizContext } from '../contexts/QuizContext';

function Question() {
    const { questions, current } = useContext(QuizContext);

    // Prevent errors if questions are not yet loaded
    if (!questions || questions.length === 0) {
        return <p>Loading question...</p>;
    }

    const question = questions[current];

    return (
        <div className="question-container">
            <p className="question-text">{question.question}</p>
            <Options question={question} />
        </div>
    );
}

export default Question;
