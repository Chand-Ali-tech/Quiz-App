import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { QuizProvider } from './contexts/QuizContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

// High Score --> Login,SignUp features
// LeaderBoard
// Instructios
// Easy, Medium, Hard