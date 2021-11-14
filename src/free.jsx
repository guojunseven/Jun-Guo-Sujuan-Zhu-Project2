import Reset from './board/reset';
import Board from './board/board.jsx';
import { useSelector } from 'react-redux';

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
            <Reset />
            {panelContent}
            <h1> Enemy's Panel</h1>
            <Board id='opponent' gameState={gameState} />
        </div>
    )
}