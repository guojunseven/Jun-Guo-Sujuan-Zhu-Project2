// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import check from '../functions/check';
import reset from '../functions/reset';
// import checkAction from '../action/checkAction';
// import gameOverAction from '../action/gameOverAction';

const defaultState = reset();

export default function opponentStateReducer(state = defaultState, action) {
    if (action.type === 'reset') {
        return [...reset()];
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