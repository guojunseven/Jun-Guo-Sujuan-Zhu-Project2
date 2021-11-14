export default function placeAction(x, y, length) {
    return {
        type: 'place',
        value: length,
        x: x,
        y: y
    }
}