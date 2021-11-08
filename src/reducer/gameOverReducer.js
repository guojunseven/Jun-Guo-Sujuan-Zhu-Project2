export default function gameOver(state=false, action) {
    if (action.type === 'gameOver') {
        return true;
    }
    return state;
}