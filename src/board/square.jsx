import './css/square.css';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { useSelector } from 'react-redux';
import clickAction from '../action/clickAction';
import placeAction from '../action/placeAction';

export default function Square(props) {
    const dispatch = useDispatch();
    const board = useSelector((state) => state.board);
    const symbol = props.symbol;
    let style = 'unselected';
    let content;

    // set the status of each square and the looking effect
    if (symbol === 2) {
        style = 'selected'
        content = <i class="far fa-check-circle"></i>;
    } else if (symbol === 3) {
        style = 'hit'
        if (props.type === 'opponent') {
            content = <i class="fas fa-times-circle"></i>;
        } else {
            content = <i class="fas fa-dot-circle"></i>;
        }
    } else if (symbol === 1) {
        if (props.type === 'myBoard') {
            content = <i class="fas fa-dot-circle"></i>;
        }
    }

    const [{ isOver }, dropRef] = useDrop({
        accept: 'placement',
        drop: (item) => drop(item.length, props, dispatch, board),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    let onClickEvent = () => {};
    // onClick Action for different state(prepare, start, over);
    if (props.gameState === 'start' && props.type === 'opponent') {
        onClickEvent = () => dispatch(clickAction(props.x, props.y));
    }

    // add droppable listener
    if (props.type === 'myBoard') {
        return (
            <div className={`square ${style}`} ref={dropRef} 
            onClick={onClickEvent}>{content}</div>
        )
    } else {
        return (
            <div className={`square ${style}`} onClick={onClickEvent}>{content}</div>
        )
    }
    
}

function drop(shipLength, props, dispatch, board) {
    
    if (! checkBoard(shipLength, props.x, props.y, board)) {
        // not a valid position
        return;
    }
    dispatch(placeAction(props.x, props.y, shipLength))
}

function checkBoard(shipLength, x, y, board) {
    // check if this placement is valid on the given board
    const width = board[0].length;
    for (let i = 0; i < shipLength; i++) {
        let newY = y + i;
        if (newY >= width || board[x][newY] === 1) {
            return false;
        }
    }
    return true;
}