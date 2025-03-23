import React, { useContext } from "react";
import './App.css'
import { QuizContext } from "../contexts/QuizContext";
import Timer from "./Timer";

function Progress() {

    const { questions, current, points, timeRemaining, dispatch } = useContext(QuizContext)

    const totalPoints = questions.reduce((sum, question) => sum + question.points, 0);
    const progressPercentage = (points / totalPoints) * 100;

    const radius = 35; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference
    const progressStroke = (progressPercentage / 100) * circumference;

    return (
        <div className="progress-container">
            <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
            <div className="progress-info">
                <p>
                    Question: <span>{current + 1}</span> / <span>{questions.length}</span>
                </p>
                <p>
                    Points: <span>{points}</span> / <span>{totalPoints}</span>
                </p>
            </div>
            <div className="progress-circle-container">
                <svg width="80" height="80">
                    <circle
                        className="progress-circle-bg"
                        cx="40"
                        cy="40"
                        r={radius}
                    />
                    <circle
                        className="progress-circle"
                        cx="40"
                        cy="40"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progressStroke}
                    />
                </svg>
                <div className="progress-percentage">{progressPercentage.toFixed(1)}%</div>
            </div>
        </div>
    );
}

export default Progress;
