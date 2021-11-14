import random from '../functions/random';

const defaultState = random();

export default function opponentStateReducer(state = defaultState, action) {
    if (action.type === 'init') {
        return [...random()];
    } else if (action.type === 'click') {
        let square = state[action.x][action.y];
        if (square === 0) {
            state[action.x][action.y] = 2;
        } else if (square === 1) {
            state[action.x][action.y] = 3;
        }
        return [...state];
    }
    return state;
}