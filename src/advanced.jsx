import Reset from './board/reset'
import Board from './board/board.jsx'
import ShipPanel from './ship/shipPanel';
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import gameAction from './action/gameAction';

export default function Advanced() {

    const gameState = useSelector((state) => state.gameState);
    const shipState = useSelector((state) => state.ships);
    const dispatch = useDispatch();

    let panelContent = null;
    // when all ships are selected, reveal a button to start this game
    if (gameState === 'prepare') {
        if (shipState.length > 0) { // still have unselected ship
            panelContent = <ShipPanel />
        } else {
            panelContent = <Button variant="danger" size="lg" onClick={() => dispatch(gameAction('start'))}>Start</Button>
        }
    } else if (gameState === 'start') {
        panelContent = <h2>Game In Progress !</h2>
    } else if (gameState === 'AI') {
        panelContent = <h2>Oops, You lose</h2>
    } else if (gameState === 'You') {
        panelContent = <h2>Congrats ! You won !</h2>
    }

    return (
        <>
            <div className='d-flex justify-content-center' style={{ marginTop: '50px' }}>
                <Reset gameType='advanced' />
            </div>
            <div className='d-flex justify-content-center' style={{ marginTop: '30px' }}>
                {panelContent}
            </div>
            <div className="d-flex justify-content-around" style={{ marginTop: '40px' }}>
                <div className='box' style={{ marginLeft: '100px' }}>
                    <h1> Enemy's Panel</h1>
                    <Board id='opponent' gameState={gameState} />
                </div>

                <div className='box' style={{ marginRight: '100px' }}>
                    <h1> Your Panel</h1>
                    <Board id='myBoard' gameState={gameState} />
                </div>
            </div>
            {/* <div className="playGround">
                <Reset gameType='advanced' />
                {panelContent}
                <h1> Enemy's Panel</h1>
                <Board id='opponent' gameState={gameState} />
                <h1> Your Panel</h1>
                <Board id='myBoard' gameState={gameState} />
            </div> */}
        </>
    )
}