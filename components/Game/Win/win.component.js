import { getCatchCount, playAgain } from "../../../data.js"

export function Win(playerNumber) {
    const element = document.createElement('div')
    element.append(`You Win! CATCH: ${getCatchCount().player1}`)

    const playAgainButton = document.createElement('button')
    playAgainButton.append('PLAY AGAIN')
    playAgainButton.addEventListener('click', () => {
        playAgain()

    })

    element.append(playAgainButton)

    return element
}