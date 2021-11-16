import './css/rule.css';

export default function rule() {

    return (
        <div id='rule'>
            <h1 class='title'>Sink the enemy ships before they sink you!</h1>
            
            <h2 id='free'>Free Game</h2>
            <ol>
                <li>Only show the opponent board</li>
                <li>Five ships are randomly placed on the board but they are hidden</li>
                <li>Opponent’s turn will be skipped</li>
                <li>Select a square on the opponent board</li>
                <li>Try to destroy all of your opponent’s ships before they get yours</li>
            </ol>
    
            <h2 id='normal'>Normal Game</h2>
            <ol>
                <li>Ships are generated randomly on your board</li>
                <li>Five ships are randomly placed on the board but they are hidden</li>
                <li>Select a square on the opponent board</li>
                <li>You and AI take turns to hit the board</li>
                <li>Try to destroy all of your opponent’s ships before they get yours</li>
            </ol>
            
            <h2 id='advanced'>Advanced Game</h2>
            <ol>
                <li>Ships are generated randomly on your enemy's board</li>
                <li>Select your ship manually to place it on your board as you wish</li>
                <li>Click Start when all five battleships are on their positions</li>
                <li>You and AI take turns to hit the board</li>
                <li>Try to destroy all of your opponent’s ships before they get yours</li>
            </ol>   
        </div>
    )
}
