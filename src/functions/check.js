// check if the game has ended
export default function check(state) {
    for (let row of state) {
        for (let element of row) {
            if (element === 2) {
                return false;
            }
        }
    }
    return true;
}