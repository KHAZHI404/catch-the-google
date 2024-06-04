import { getCatchPlayer1, getCatchPlayer2, getMissCount } from "../../../data.js"

export function ResultPanel() {
    const element = document.createElement('div')

    element.append(`Player1: ${getCatchPlayer1()}, Player2: ${getCatchPlayer2()}, MISS: ${getMissCount()}`)

    return element
}