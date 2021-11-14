import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from './action/initAction';
import gameAction from './action/gameAction';

export default function Home() {
    const dispatch = useDispatch();
    return (
        <div id='home'>
            <Button href="/free" variant='primary' size = "lg" gameType='free' 
            onClick={() => {dispatch(initAction('free')); dispatch(gameAction('start'))}}>
                Free
            </Button>
            <Button href="/normal" variant='primary' size = "lg" gameType='normal' 
            onClick={() => {dispatch(initAction('normal')); dispatch(gameAction('start'))}}>
                Normal
            </Button>
            <Button href="/advanced" variant='primary' size = "lg" gameType='advanced' 
            onClick={() => dispatch(initAction('advanced'))}>
                Advanced
            </Button>
        </div>
    )
}