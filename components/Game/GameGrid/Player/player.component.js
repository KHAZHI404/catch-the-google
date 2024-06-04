import { validatePlayerNumberOrThrow } from "../../../../data.js"

export function Player(playerNumber) {

    validatePlayerNumberOrThrow(playerNumber)

    const element = document.createElement('img')
    element.id = 'img'

    element.src = `assets/images/player${playerNumber}.png`

    return element
}