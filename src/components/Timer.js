import { useContext, useEffect } from "react"
import { QuizContext } from "../contexts/QuizContext"

function Timer() {
    const { timeRemaining, dispatch } = useContext(QuizContext)
    useEffect(function () {
        const intervalId = setInterval(function () {
            dispatch({ type: 'decrement' })
            if (timeRemaining <= 0) {
                dispatch({ type: 'timeout' })
            }
        }, 1000)
        return function () {
            clearInterval(intervalId)
        }
    }, [timeRemaining, dispatch])

    return (
        <div className={`timer ${timeRemaining <= 0 ? 'expired' : timeRemaining < 10 ? 'warning pulse' : 'safe'}`}>
            {
                timeRemaining <= 0 ? 'Time is up!' :
                    timeRemaining % 60 === 0 ? '00:' + timeRemaining :
                        '0' + Math.floor(timeRemaining / 60) + ':' + (timeRemaining % 60 < 10 ? '0' : '') + timeRemaining % 60
            }
        </div>

    )
}

export default Timer