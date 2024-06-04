import { getCatchPlayer1, getCatchPlayer2, getMissCount, playAgain } from "../../../data.js"
import { playLoseSound } from "../Settings/Music/music-settings.components.js"

export function Lose() {
    const element = document.createElement('div')
    element.append(`You Luse! Player1: ${getCatchPlayer1()}, Player2: ${getCatchPlayer2()}, Google: ${getMissCount()} `)

    const playAgainButton = document.createElement('button')
    playAgainButton.append('PLAY AGAIN')
    playAgainButton.addEventListener('click', () => {
        playAgain()
})

    element.append(playAgainButton)

    playLoseSound()
    return element
}