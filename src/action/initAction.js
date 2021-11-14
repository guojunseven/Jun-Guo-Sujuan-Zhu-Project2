export default function initAction(gameType) {
    return {
        type: 'init',
        gameType: gameType,
        initialState: gameType === 'advanced' ? 'prepare' : 'start'
    }
}