import random from '../functions/random';
import initialize from '../functions/initialize';

const defaultState = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    
export default function boardStateReducer(state = defaultState, action) {
   
    if (action.type === 'init') {
        if (action.gameType === 'normal') {
            return [...random()]; // random generate my board
        } else if (action.gameType === 'advanced') {
            initialize(state);
            return [...state];
        }
    } else if (action.type === 'click') {
        while(true) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            let square = state[x][y];
            if (square === 0) {
                state[x][y] = 2;
                break;
            } else if (square === 1) {
                state[x][y] = 3;
                break;
            }
        }
        return [...state];
    } else if (action.type === 'place') {
        let x = action.x;
        let y = action.y;
        for (let i = 0; i < action.value; i++) {
            state[x][y + i] = 1;
        }
        return [...state];
    }
    return state;
}