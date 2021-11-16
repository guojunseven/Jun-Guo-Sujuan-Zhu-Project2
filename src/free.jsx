import Reset from './board/reset';
import Board from './board/board.jsx';
import { useSelector } from 'react-redux';
import './css/playground.css';

export default function Free() {
    const gameState = useSelector((state) => state.gameState);

    let panelContent = null;
    // when all ships are selected, reveal a button to start this game
    if (gameState === 'start') {
        panelContent = <h2>Game In Progress !</h2>
    } else if (gameState === 'You') {
        panelContent = <h2>Congrats ! You won !</h2>
    }

    return (
        <div className="playGround">
            <Reset gameType='free'/>
            <div class='gameContent'>
                {panelContent}
            </div>
            <div class='boards'>
                <div class='boardCol'>
                    <h1> Enemy's Panel</h1>
                    <Board id='opponent' gameState={gameState} />
                </div>
            </div>
        </div>
    )
}