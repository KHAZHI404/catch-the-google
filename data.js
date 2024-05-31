const _data = {
    settings: {
        gridSize: {x: 1, y: 1,}
    },
    catch: 0,
    time: new Date(),
    heroes: {
        google: {x: 1, y: 1,},
        player1: {},
        player2: {},
    }
}
//setter, mutation, command

export function setGridSize(x, y) {
    if (x < 1) throw new Error('Incorrect X in grid size settings')
    if (y < 1) throw new Error('Incorrect Y in grid size settings')

    _data.settings.gridSize.x = x
    _data.settings.gridSize.y = y
}

//getter, selector, query

export function getCatchCount() {
    return _data.catch
}

export function getGoogleCoords() {
    return {..._data.heroes.google}
}

export function getGridSize() {
    return {..._data.settings.gridSize}
}

