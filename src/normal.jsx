import Reset from './board/reset'
import Board from './board/board.jsx'

export default function normal() {
    return (
        <div className="playGround">
            <Reset />
            <h1> Enemy's Panel</h1>
            <Board id='opponent' />
            <h1> Your Panel</h1>
            <Board id='myBoard' />
            
        </div>
    )
}