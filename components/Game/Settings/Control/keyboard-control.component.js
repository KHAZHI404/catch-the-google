import { MOVING_DIRECTIONS, movePlayer } from "../../../../data.js"

export function keyboardControl() {

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'ArrowLeft': {
                movePlayer(1, MOVING_DIRECTIONS.LEFT)
                break
            }
            case 'ArrowRight': {
                movePlayer(1, MOVING_DIRECTIONS.RIGHT)
                break
            }
            case 'ArrowUp': {
                movePlayer(1, MOVING_DIRECTIONS.UP)
                break
            }
            case 'ArrowDown': {
                movePlayer(1, MOVING_DIRECTIONS.DOWN)
                break
            }
            case 'KeyA': {
                movePlayer(2, MOVING_DIRECTIONS.LEFT)
                break
            }
            case 'KeyD': {
                movePlayer(2, MOVING_DIRECTIONS.RIGHT)
                break
            }
            case 'KeyW': {
                movePlayer(2, MOVING_DIRECTIONS.UP)
                break
            }
            case 'KeyS': {
                movePlayer(2, MOVING_DIRECTIONS.DOWN)
                break
            }
        }
    }
    )
}