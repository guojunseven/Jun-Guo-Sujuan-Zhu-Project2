const defaultState = 'prepare';

export default function gameStateReducer(state = defaultState, action) {
    if (action.type === 'game') {
        return action.state;
    } if (action.type === 'init') {
        return action.initialState;
    }
    return state;
}