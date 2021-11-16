import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import initAction from './action/initAction';
import gameAction from './action/gameAction';

export default function Home() {
    const dispatch = useDispatch();
    return (
        <>
            <h1 style={{ color: "purple", fontSize: "30px", fontWeight: 'bold', display: "flex", justifyContent: "center", paddingTop: "40px" }}>Choose Your Game</h1>
            <Container id='home' style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '520px',
                paddingTop: '50px',

            }} >

                <Button href="/free" variant='warning' size="lg" gameType='free' style={{ marginRight: 10 }}
                    onClick={() => { dispatch(initAction('free')); dispatch(gameAction('start')) }}>
                    Free
                </Button>
                <Button href="/normal" variant='danger' size="lg" gameType='normal' style={{ marginLeft: 10 }}
                    onClick={() => { dispatch(initAction('normal')); dispatch(gameAction('start')) }}>
                    Normal
                </Button>
                <Button href="/advanced" variant='primary' size="lg" gameType='advanced' style={{ margin: 20 }}
                    onClick={() => dispatch(initAction('advanced'))}>
                    Advanced
                </Button>
            </Container>
        </>
    )
}
////variant='warning'
//variant='danger'
//variant='primary'