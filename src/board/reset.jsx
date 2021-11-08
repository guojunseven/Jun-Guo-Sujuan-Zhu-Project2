import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import resetAction from '../action/resetAction';

export default function Reset() {
    const dispatch = useDispatch();
    return (<Button variant="success" onClick={()=>dispatch(resetAction())}>Reset</Button>);
}