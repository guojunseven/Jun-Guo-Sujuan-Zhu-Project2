import ShipPart from './shipPart';
import './css/ship.css';
import {useDrag} from 'react-dnd';

export default function Ship(props) {
    const shipParts = [];
    for (let i = 0; i < props.length; i++) {
        shipParts.push(<ShipPart />)
    }
    const [{isDragging}, dragRef] = useDrag({
        type: 'placement',
        item: {length : props.length},
        collect: (monitor) => ({
            isDragging : monitor.isDragging()
        })

    })
    return <div className = 'ship' ref={dragRef}>
        {shipParts}
    </div>
}