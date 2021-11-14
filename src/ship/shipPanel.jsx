import Ship from './ship';
import './css/shipPanel.css';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function ShipPanel(props) {
    const shipState = useSelector((state) => state.ships);
    const ships = [];
    for (let length of shipState) {
        ships.push(<Ship length = {length} />);
    }

    return (
        <DndProvider backend = {HTML5Backend}> 
            <h2> Select And Place Your BattleShips !</h2>
            <div className = 'shipPanel'>
                {ships}
            </div>
        </DndProvider>
    )
}