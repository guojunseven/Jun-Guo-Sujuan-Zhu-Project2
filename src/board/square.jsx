import './css/square.css';
import { useDispatch } from 'react-redux';
import clickAction from '../action/clickAction';

export default function Square(props) {
    const dispatch = useDispatch();
    const symbol = props.symbol;
    let style = 'unselected';
    let content;
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
    return (
        <div className={`square ${style}`} onClick={() => dispatch(clickAction(props.x, props.y))}>{content}</div>
    )
}