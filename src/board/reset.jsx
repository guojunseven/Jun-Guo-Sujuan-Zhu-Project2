import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from '../action/initAction';

export default function Reset(props) {
    const dispatch = useDispatch();
    return (
        // <Container style={{
        //     flex: 1,
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     paddingTop: '20px',
        // }}>
        //     <Button variant="success" onClick={() => dispatch(initAction(props.gameType))}>Reset</Button>
        // </Container>)
        <div className='d-flex justtify-content-center'>

            <Button variant="success" onClick={() => dispatch(initAction(props.gameType))}>Reset</Button>
        </div>)

}