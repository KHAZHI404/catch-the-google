import { GAME_STATES, getGameState } from "../../data.js"
import { GameGrid } from "./GameGrid/game-grid.component.js"
import { Lose } from "./Lose/lose.component.js"
import { ResultPanel } from "./ResultPanel/result-panel.component.js"
import { Settings } from "./Settings/settings.component.js"
import { Win } from "./Win/win.component.js"

export function Game() {
    const element = document.createElement('div')
    element.id = 'game'
    const gameState = getGameState()

    switch (gameState) {
        case GAME_STATES.IN_PROGRESS: {
            element.append(ResultPanel(), GameGrid())
            break
        }
        case GAME_STATES.SETTINGS: {
            element.append(Settings())
            break
        }
        case GAME_STATES.WIN: {
            element.append(Win())
            break
        }
        case GAME_STATES.LOSE: {
            element.append(Lose())
            break
        }
        default: {
            throw new Error('Not supported state')
        }
    }


    return element
}