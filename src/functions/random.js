// generate the board configuration randomly
const ships = [5, 4, 3, 3, 2]
const directions = [[0, 1], [1, 0]]; // horizontally & vertically

//0 : not selected 
//1 : ship not hit
//2 : selected (not hit)
//3 : ship hit

export default function random() {
    const state = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ] 
    for (let ship of ships) {
        
        while(true) {
            var startX = Math.floor(Math.random() * 10)
            var startY = Math.floor(Math.random() * 10)
            var direction = directions[Math.floor(Math.random() * 2)]
            let i = 0;
            let flag = true;
            while (i++ < ship) {
                if (startX < 0 || startY < 0 || startX > 9 || startY > 9 || state[startX][startY] !== 0) {
                    flag = false;
                    break;
                }
                startX += direction[0];
                startY += direction[1];
            }
            if (flag) {
                break;
            }
        }
        // place the ship
        let i = 0;
        while (i++ < ship) {
            startX -= direction[0];
            startY -= direction[1];
            state[startX][startY] = 1;
        }
    }
    return state;
}