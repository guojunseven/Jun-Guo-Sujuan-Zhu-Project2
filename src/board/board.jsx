import Square from './square';
import './css/board.css';
import { useSelector } from 'react-redux';

export default function Board(props) {
    const gridState = useSelector((state) => (props.id === 'myBoard' ? state.board : state.opponent));
    const gridComponent = [];
    
    let gameOver = true;

    for (let i = 0; i < gridState.length; i++) {
        let row = gridState[i];
        for (let j = 0; j < row.length; j++) {
            if (gridState[i][j] === 1) {
                gameOver = false;
            }
            gridComponent.push(<Square symbol = {gridState[i][j]} x = {i} y = {j} type = {props.id}/>);
        }
    }
    if (gameOver) {
        if (props.id === 'myBoard') {
            alert("AI won");
        } else {
            alert("You won");
        }
    }
    
    return <div className={`${props.id} grid`}>
        {gridComponent}
    </div>
}