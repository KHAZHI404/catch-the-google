import { getMissCount, playAgain } from "../../../data.js"

export function Lose() {
    const element = document.createElement('div')
    element.append(`You Lose! MISS: ${getMissCount()}`)

    const playAgainButton = document.createElement('button')
    playAgainButton.append('PLAY AGAIN')
    playAgainButton.addEventListener('click', () => {
        playAgain()
})

    element.append(playAgainButton)

    return element
}