
export default function rule() {

    return (
        <div>
            <h1 style={{ color: "red", fontSize: "40px", fontStyle: "italic", display: "flex", justifyContent: "center", paddingTop: "20px" }}>Sink the enemy ships before they sink you!</h1>
            <p>
                <h2 style={{ background: "orange", color: "white", fontSize: "25px", display: "flex", justifyContent: "left", paddingTop: "20px", paddingLeft: "200px" }}>Free Game</h2>
                <div>
                    <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>1. Only show the opponent board.</p>
                    <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>2. Five ships are randomly placed on the board but they are hidden.</p>
                    <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>3. Opponent’s turn will be skipped.</p>
                    <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>4. Select a square on the opponent board.</p>
                    <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>5. Try to destroy all of your opponent’s ships before they get yours.</p>
                </div>
            </p>
            <p>
                <h2 style={{ background: "red", color: "white", fontSize: "25px", display: "flex", justifyContent: "left", paddingTop: "20px", paddingLeft: "200px" }}>Normal Game</h2>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>1. Ships are generated randomly on your board.</p>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>2. Select a square on the opponent board.</p>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>3. Try to destroy all of your opponent’s ships before they get yours.</p>
            </p>
            <p>
                <h2 style={{ background: "blue", color: "white", fontSize: "25px", display: "flex", justifyContent: "left", paddingTop: "20px", paddingLeft: "200px" }}>Advanced Game</h2>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>1. Select your ship to place it.</p>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>2. Place all of your ships on the board.</p>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>3. Select a square on the opponent board.</p>
                <p style={{ fontSize: "20px", display: "flex", justifyContent: "left", paddingTop: "2px", paddingLeft: "300px" }}>4. Try to destroy all of your opponent’s ships before they get yours.</p>
            </p>
        </div>
    )
}
