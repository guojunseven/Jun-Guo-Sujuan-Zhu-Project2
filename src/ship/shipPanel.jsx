import Ship from './ship';
import './css/shipPanel.css';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function ShipPanel(props) {
    const shipState = useSelector((state) => state.ships);
    const ships = [];
    for (let length of shipState) {
        ships.push(<Ship length={length} />);
    }

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <div className='d-flex justify-content-center' style={{ marginTop: '30px' }}>
                        <h2> Select And Place Your BattleShips !</h2>
                    </div>
                    <div className='d-flex justify-content-center' id='shipPanel' style={{ marginTop: '30px' }}>
                        {ships}
                    </div>
                </div>
                {/* <h2> Select And Place Your BattleShips !</h2>
                <div className='shipPanel'>
                    {ships}
                </div> */}
            </DndProvider>
        </>
    )
}