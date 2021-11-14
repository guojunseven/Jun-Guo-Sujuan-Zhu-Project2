// this reducer is used to track the placement of each ship
const defaultState = [5, 4, 3, 3, 2]

export default function shipStateReducer(state = defaultState, action) {
    if (action.type === 'place') {
        // remove the placed ship from panel
        for (let index in state) {
            if (state[index] === action.value) {
                state.splice(index, 1);
                return [...state]; 
            }
        }
        return state;
    } else if (action.type === 'init') {
        return defaultState; // init all ships
    }
    return state;
}