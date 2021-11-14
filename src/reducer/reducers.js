import { combineReducers } from "redux"
import boardState from "./boardStateReducer"
import opponentState from "./opponentStateReducer"
import  gameState from "./gameStateReducer"
import shipState from "./shipStateReducer"

export default combineReducers({
    board : boardState,
    opponent : opponentState,
    gameState : gameState,
    ships : shipState
})