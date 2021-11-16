import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from '../action/initAction';

export default function Reset(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <Button variant="success" onClick={() => dispatch(initAction(props.gameType))}><span class='buttontext'>Reset</span></Button>
        </div>)

}