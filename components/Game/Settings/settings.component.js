import { start } from "../../../data.js"

export function Settings() {
    const element = document.createElement('div')

    const startButton = document.createElement('button')
    startButton.append('START GAME')
    startButton.addEventListener('click', () => { //тут я сразу передавал start()
        start()
})

    element.append(startButton)

    return element
}