import { useContext } from 'react'
import './App.css'
import { QuizContext } from '../contexts/QuizContext'

function Footer() {
    const { ans, dispatch} = useContext(QuizContext)
    return (
        <footer>
            {
                ans !== null && ans !== undefined &&
                <button className="next-button" onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
            }
        </footer>
    )
}

export default Footer