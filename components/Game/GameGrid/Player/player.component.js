import { validatePlayerNumberOrThrow } from "../../../../data.js"

export function Player(playerNumber) {

    validatePlayerNumberOrThrow(playerNumber)

    const element = document.createElement('span')

    element.append(`PP${playerNumber}`)

    return element
}