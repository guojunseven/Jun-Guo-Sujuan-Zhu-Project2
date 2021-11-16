import { Button, Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from './action/initAction';
import gameAction from './action/gameAction';
import './css/index.css';
import './css/home.css';

export default function Home() {
    const dispatch = useDispatch();
    return (
        <div id='home'>
            <div class='jumbotron'>
                <h1>Play Battleship board game online and enjoy three interesting game mode!</h1>
                <hr/>
                <h1>Choose one mode and get started!</h1>
            </div>
            <img src='./image/battleshipIcon.jpg' />
            <Container id='buttons'>
                <Button href="/free" variant='warning' size="lg" gameType='free'
                    onClick={() => { dispatch(initAction('free')); dispatch(gameAction('start')) }}>
                    <span class='buttontext'> Free </span>
                </Button>
                <Button href="/normal" variant='danger' size="lg" gameType='normal' style={{ marginLeft: 10 }}
                    onClick={() => { dispatch(initAction('normal')); dispatch(gameAction('start')) }}>
                    <span class='buttontext'> Normal </span>
                </Button>
                <Button href="/advanced" variant='primary' size="lg" gameType='advanced' style={{ margin: 20 }}
                    onClick={() => dispatch(initAction('advanced'))}>
                    <span class='buttontext'> Advanced </span>
                </Button>
            </Container>
        </div>
    )
}
////variant='warning'
//variant='danger'
//variant='primary'