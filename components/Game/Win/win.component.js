import { getCatchPlayer1, getCatchPlayer2, getMissCount, playAgain } from "../../../data.js"
import { playWinSound } from "../Settings/Music/music-settings.components.js"

export function Win() {
    const element = document.createElement('div')
    

    if (getCatchPlayer1() > getCatchPlayer2()) {
        element.append('Player 1 WIN! ')
    } 
    if (getCatchPlayer1() < getCatchPlayer2()) {
        element.append('Player 2 WIN! ')
    }

    element.append(`Player1: ${getCatchPlayer1()}, Player2: ${getCatchPlayer2()}, Google: ${getMissCount()} `)

    const playAgainButton = document.createElement('button')
    playAgainButton.append('PLAY AGAIN')
    playAgainButton.addEventListener('click', () => {
        playAgain()

    })

    element.append(playAgainButton)
    
    playWinSound()
    return element
}