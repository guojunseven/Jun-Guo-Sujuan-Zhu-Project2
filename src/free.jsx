import Reset from './board/reset'
import Board from './board/board.jsx'

export default function free() {
    return (
        <div className="playGround">
            <Reset />
            <h1> Enemy's Panel</h1>
            <Board id='opponent'/>
        </div>
    )
}