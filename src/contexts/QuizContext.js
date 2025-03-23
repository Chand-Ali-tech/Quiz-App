import { createContext, useReducer } from "react";

const initialState = {
  questions: [],
  status: 'loading',
  current: 0,
  ans: null, // Selected option by user
  points: 0,
  timeRemaining: 119
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        status: action.status
      };
    case "Failure":
      return {
        ...state,
        status: 'error'
      };
    case "Go":
      return {
        ...state,
        status: 'active',
      };
    case "Answered":
      if (state.questions.length === 0) return state;

      const currentQuestion = state.questions[state.current];
      const isCorrect = action.payload === currentQuestion.correctoption;
      const newPoints = isCorrect ? state.points + currentQuestion.points : state.points;

      return {
        ...state,
        ans: action.payload,
        points: newPoints,
        status: state.current === state.questions.length - 1 ? 'finished' : 'active'
      };
    case "nextQuestion":
      return {
        ...state,
        current: Math.min(state.current + 1, state.questions.length - 1),
        ans: null
      };
    case "restart":
      return {
        ...state,
        current: 0,
        ans: null,
        points: 0,
        status: 'ready'
      };
    case "timeout":
      return {
        ...state,
        status: 'finished',
      };
    case "decrement":
      return {
        ...state,
        timeRemaining: Math.max(state.timeRemaining - 1, 0)
      };
    default:
      return state;
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [{ questions, status, current, ans, points, timeRemaining }, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ questions, status, current, ans, points, timeRemaining, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
