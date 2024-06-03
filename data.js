export const GAME_STATES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose',
}

export const MOVING_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
}

const _data = {
    gameState: GAME_STATES.SETTINGS,
    settings: {
        gridSize: {x: 1, y: 1},
        pointsToWin: 13,
        pointsToLose: 13,
        googleJumpInteval: 4000
    },
    catch: {
        player1: 0,
        player2: 0
    },
    miss: 0,
    time: new Date(),
    heroes: {
        google: {x: 0, y: 0},
        player1: {x: 1, y: 1},
        player2: {x: 2, y: 2},
    }
}

let _observer = () => {}

function _changeGoogleCoords() {
    let newX
    let newY

    do {
        newX = _getRandomInt(_data.settings.gridSize.x - 1)
        newY = _getRandomInt(_data.settings.gridSize.y - 1)
    } while (
       newX === _data.heroes.google.x && newY === _data.heroes.google.y
    || newX === _data.heroes.player1.x && newY === _data.heroes.player1.y
    || newX === _data.heroes.player2.x && newY === _data.heroes.player2.y
    )


    _data.heroes.google.x = newX
    _data.heroes.google.y = newY

}

function _getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}

let jumpId;
function _runGoogleJump() {
    jumpId = setInterval(() => {
        _changeGoogleCoords();
        _data.miss++;
        if (_data.miss === _data.settings.pointsToLose) {
            _stopGoogleJump();
            _data.gameState = GAME_STATES.LOSE
        }
        _observer();
    }, _data.settings.googleJumpInteval)
}

function _stopGoogleJump() {
    clearInterval(jumpId)
}

//setter, mutation, command

export function addListener(subscriber) {
    _observer = subscriber
}

export function setGridSize(x, y) {
    if (x < 1) throw new Error('Incorrect X in grid size settings')
    if (y < 1) throw new Error('Incorrect Y in grid size settings')

    _data.settings.gridSize.x = x
    _data.settings.gridSize.y = y
    
}

export function start() {
 if (_data.gameState !== GAME_STATES.SETTINGS) {
        throw new Error('Game cannot be started from state: ' + _data.gameState)
    }

    _data.gameState = GAME_STATES.IN_PROGRESS
    _runGoogleJump()
    _observer()
}

export function playAgain() {
    _data.catch = 0
    _data.miss = 0
    _data.gameState = GAME_STATES.SETTINGS
    _observer()
}

function _catchGoogle(playerNumber) {
    
    _stopGoogleJump()

    
    _data.catch[`player${playerNumber}`]++

    if (_data.catch[`player${playerNumber}`] === _data.settings.pointsToWin) {
        _data.gameState = GAME_STATES.WIN
    }
     else {
        _changeGoogleCoords()
        _runGoogleJump()
    }
    
    _observer()
}

function _checkCoordValidRange(coords) {
    const xIsCorrect = coords.x >= 0 && coords.x < _data.settings.gridSize.x
    const yIsCorrect = coords.y >= 0 && coords.y < _data.settings.gridSize.y

    return xIsCorrect && yIsCorrect
}
function _coordsMatchWithOtherPlayer(coords) {
    const coordsMatchInPlayer1 = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y 
    const coordsMatchInPlayer2 = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y

    return coordsMatchInPlayer1 || coordsMatchInPlayer2
}
    
function _coordsMatchWithGoogle(coords) {
    const coordsMatchInGoogle = coords.x === _data.heroes.google.x && coords.y === _data.heroes.google.y

    return coordsMatchInGoogle
}

export function movePlayer(playerNumber, direction) {
    validatePlayerNumberOrThrow(playerNumber)

    if (_data.gameState !== GAME_STATES.IN_PROGRESS) {
        return
    }

    const newCoords = {..._data.heroes[`player${playerNumber}`]}

    switch (direction) {
        case MOVING_DIRECTIONS.LEFT: {
            newCoords.x--
            break
        }
        case MOVING_DIRECTIONS.RIGHT: {
            newCoords.x++
            break
        }
        case MOVING_DIRECTIONS.UP: {
            newCoords.y--
            break
        }
        case MOVING_DIRECTIONS.DOWN: {
            newCoords.y++
            break
        }
    }

    const isValid = _checkCoordValidRange(newCoords)
    if (!isValid) return

    const isMatchWithOtherPlayer = _coordsMatchWithOtherPlayer(newCoords)
    if (isMatchWithOtherPlayer) return

    const isMatchWithGoogle = _coordsMatchWithGoogle(newCoords)
    if (isMatchWithGoogle) {
        _catchGoogle(playerNumber)
    }

    _data.heroes[`player${playerNumber}`] = newCoords

    _observer()

}

//getter, selector, query

export function getCatchCount() {
    return _data.catch
}

export function getMissCount() {
    return _data.miss
}

export function getGoogleCoords() {
    return {..._data.heroes.google}
}

export function getPlayer1Coords() {
    return {..._data.heroes.player1}
}

export function getPlayer2Coords() {
    return {..._data.heroes.player2}
}

export function getGridSize() {
    return {..._data.settings.gridSize}
}

export function getGameState() {
    return _data.gameState
}

export function validatePlayerNumberOrThrow(playerNumber) {
    if (![1,2].some(number => number === playerNumber)) {
        throw new Error('Player number is incorrect')
    }
}