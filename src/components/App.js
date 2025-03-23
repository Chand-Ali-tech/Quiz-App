import { useContext, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import QuizResult from "./QuizResult";
import Footer from "./Footer";
import { QuizContext } from "../contexts/QuizContext";

function App() {
  const { dispatch, status } = useContext(QuizContext);

  useEffect(() => {
    async function GetData() {
      const data = [
        {
          "question": "What does the 'M' in MERN stack stand for?",
          "options": {
            "0": "MySQL",
            "1": "MongoDB",
            "2": "MariaDB",
            "3": "Microsoft SQL Server"
          },
          "correctoption": 1,
          "points": 10,
          "id": "q001"
        },
        {
          "question": "Which framework is used for building the backend in the MERN stack?",
          "options": {
            "0": "Angular",
            "1": "React",
            "2": "Express.js",
            "3": "Vue.js"
          },
          "correctoption": 2,
          "points": 10,
          "id": "q002"
        },
        {
          "question": "Which database is commonly used in the MERN stack?",
          "options": {
            "0": "PostgreSQL",
            "1": "Firebase",
            "2": "MongoDB",
            "3": "SQLite"
          },
          "correctoption": 2,
          "points": 10,
          "id": "q003"
        },
        {
          "question": "What is the primary purpose of React in the MERN stack?",
          "options": {
            "0": "Handling database operations",
            "1": "Building the frontend user interface",
            "2": "Managing server-side logic",
            "3": "Creating APIs"
          },
          "correctoption": 1,
          "points": 10,
          "id": "q004"
        },
        {
          "question": "Which package is commonly used for routing in a React application?",
          "options": {
            "0": "react-router-dom",
            "1": "express-router",
            "2": "next/router",
            "3": "redux-router"
          },
          "correctoption": 0,
          "points": 10,
          "id": "q005"
        },
        {
          "question": "Which of the following is a NoSQL database used in the MERN stack?",
          "options": {
            "0": "PostgreSQL",
            "1": "MongoDB",
            "2": "Oracle",
            "3": "SQL Server"
          },
          "correctoption": 1,
          "points": 10,
          "id": "q006"
        },
        {
          "question": "Which command is used to start a React project?",
          "options": {
            "0": "npm start-react",
            "1": "npx create-react-app my-app",
            "2": "node start",
            "3": "react new my-app"
          },
          "correctoption": 1,
          "points": 10,
          "id": "q007"
        },
        {
          "question": "What is the purpose of Express.js in the MERN stack?",
          "options": {
            "0": "To handle the frontend",
            "1": "To manage the database",
            "2": "To create the backend and APIs",
            "3": "To manage state"
          },
          "correctoption": 2,
          "points": 10,
          "id": "q008"
        },
        {
          "question": "Which state management library is commonly used with React?",
          "options": {
            "0": "Redux",
            "1": "Vuex",
            "2": "Flux",
            "3": "Express"
          },
          "correctoption": 0,
          "points": 10,
          "id": "q009"
        },
        {
          "question": "Which of the following is the default port for a React development server?",
          "options": {
            "0": "3000",
            "1": "5000",
            "2": "8080",
            "3": "4000"
          },
          "correctoption": 0,
          "points": 10,
          "id": "q010"
        }
      ]
      

      if (data.length > 0) {
        dispatch({ type: "SET_QUESTIONS", payload: data, status: "ready" });
      } else {
        dispatch({ type: "Failure" });
      }
    }

    GetData();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && <Progress />}
        {status === 'active' && <Question />}
        {status === 'active' && <Footer />}
        {status === 'finished' && <QuizResult />}
      </Main>
    </div>
  );
}

export default App;