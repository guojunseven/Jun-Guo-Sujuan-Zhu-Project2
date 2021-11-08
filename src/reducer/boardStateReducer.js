import reset from '../functions/reset';
// import check from '../functions/check';
// import {useDispatch} from 'react-redux';
// import checkAction from '../action/checkAction';
// import gameOverAction from '../action/gameOverAction';

const defaultState = [...reset()];

export default function boardStateReducer(state = defaultState, action) {
    if (action.type === 'reset') {
        return [...reset()];
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
    }
    return state;
}