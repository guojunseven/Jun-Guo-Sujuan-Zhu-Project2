import Square from './square';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import gameAction from '../action/gameAction';
import config from '../config'
import './css/board.css';

export default function Board(props) {
    const boardState = useSelector((state) => (props.id === 'myBoard' ? state.board : state.opponent));
    const boardComponent = [];
    
    let hit = 0;
    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            if (boardState[i][j] === 3) { // count hit square
                hit++;
            }
            boardComponent.push(<Square gameState={props.gameState} symbol={boardState[i][j]} x={i} y={j} type={props.id}/>);
        }
    }

    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.gameState);
    if (hit === config.targetHits && gameState !== 'You') { // in case that there is a tie in the same round. The player win
        dispatch(gameAction(props.id === 'myBoard' ? 'AI' : 'You'));
    }

    return (
        <DndProvider backend = {HTML5Backend}> 
            <div className={`${props.id} grid`}>
                {boardComponent}
            </div>
        </DndProvider>
    )
}