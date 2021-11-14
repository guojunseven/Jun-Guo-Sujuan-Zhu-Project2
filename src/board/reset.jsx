import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from '../action/initAction';

export default function Reset(props) {
    const dispatch = useDispatch();
    return (<Button variant="success" onClick={()=>dispatch(initAction(props.gameType))}>Reset</Button>);
}