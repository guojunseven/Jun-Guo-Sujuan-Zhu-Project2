export default function initialize(state) {
    for (let i = 0; i < state.length; i++) {
        const row = state[i];
        for (let j = 0; j < row.length; j++) {
            state[i][j] = 0;
        }
    }
}