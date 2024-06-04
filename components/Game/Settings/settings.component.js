import { start } from "../../../data.js"
import { controlButton } from "./Control/control-settings.js"
import { toggleButton } from "./Music/music-settings.components.js"

export function Settings() {
    const element = document.createElement('div')

    const startButton = document.createElement('button')
    startButton.id = 'startButton'
    startButton.append('START GAME')
    startButton.addEventListener('click', () => {
        start()
    })

    element.append(startButton, toggleButton(), controlButton())

    return element
}