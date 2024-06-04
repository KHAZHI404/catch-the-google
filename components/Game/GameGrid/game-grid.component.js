import { getGoogleCoords, getGridSize, getPlayer1Coords, getPlayer2Coords, setGridSize } from "../../../data.js"
import { Google } from "./Google/google.component.js";
import { Player } from "./Player/player.component.js";

export function GameGrid() {
    const element = document.createElement('table')

    setGridSize(4, 4);

    for (let y = 0; y < getGridSize().y; y++) {
        const row = document.createElement('tr')

        for (let x = 0; x < getGridSize().x; x++) {
            const cell = document.createElement('td')
            if (x === getGoogleCoords().x && y === getGoogleCoords().y) {
                cell.append(Google())
            }
            if (x === getPlayer1Coords().x && y === getPlayer1Coords().y) {
                cell.append(Player(1))
            }
            if (x === getPlayer2Coords().x && y === getPlayer2Coords().y) {
                cell.append(Player(2))
            }

            row.append(cell)
        }
        element.append(row)
    }

    return element
}