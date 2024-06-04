import { MOVING_DIRECTIONS, movePlayer } from "../../../../data.js"

export function voiceControl() {
const recognition = new webkitSpeechRecognition()

recognition.lang = 'en-US'

recognition.continuous = true

recognition.onstart = () => {
    console.log('Speech recognition started')
}

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript

    const words = text.split(" ")


    console.log('its words: ', words)

    for (let i = 0; i < words.length; i++) {

        switch (words[i]) {
            case 'left': {
                movePlayer(1, MOVING_DIRECTIONS.LEFT)
                break
            }
            case 'right': {
                movePlayer(1, MOVING_DIRECTIONS.RIGHT)
                break
            }
            case 'up': {
                movePlayer(1, MOVING_DIRECTIONS.UP)
                break
            }
            case 'down': {
                movePlayer(1, MOVING_DIRECTIONS.DOWN)
                break
            }
        }
    }
}

recognition.onend = () => {
    console.log('Speech recognition onend')
}

recognition.onerror = (event) => {
    console.error(`Speech recognition error: ${event.error}`)
}

recognition.start()

}