import { getCatchCount, getMissCount } from "../../../data.js"

export function ResultPanel() {
    const element = document.createElement('div')

    element.append(`Player1: ${getCatchCount().player1}, Player2: ${getCatchCount().player2}, MISS: ${getMissCount()}`)

    return element
}