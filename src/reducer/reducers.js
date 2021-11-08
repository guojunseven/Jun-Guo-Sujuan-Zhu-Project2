import { combineReducers } from "redux"
import boardState from "./boardStateReducer"
import opponentState from "./opponentStateReducer"
import gameOver from "./gameOverReducer"

export default combineReducers({
    board : boardState,
    opponent : opponentState,
    gameOver : gameOver
})