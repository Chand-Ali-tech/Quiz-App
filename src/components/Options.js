import { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

function Options() {
    const { questions, current, ans, dispatch } = useContext(QuizContext);

    // Ensure questions exist before accessing them
    if (!questions || questions.length === 0) {
        return <p>Loading options...</p>;
    }

    const question = questions[current]; // Get the current question
    const hasAnswered = ans !== null;

    return (
        <div className="options-container">
            {Object.values(question.options).map((el, index) => (
                <button
                    className={`option-button ${hasAnswered ? (question.correctoption === index ? 'Correct' : 'Wrong') : ''}`}
                    key={index}
                    onClick={() => dispatch({ type: "Answered", payload: index })}
                    disabled={hasAnswered}
                >
                    {el}
                </button>
            ))}
        </div>
    );
}

export default Options;
