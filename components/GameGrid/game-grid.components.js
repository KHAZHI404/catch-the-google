import { getGoogleCoords, getGridSize, setGridSize } from "../../data.js"
import { Google } from "./Google/google.component.js";

export function GameGrid() {
    const element = document.createElement('table')

    setGridSize(4, 4);

    for (let y = 0; y < getGridSize().y; y++) {
        const row = document.createElement('tr')
        for (let x = 0; x < getGridSize().x; x++) {
            const cell = document.createElement('td')
            if(x === getGoogleCoords().x && y === getGoogleCoords().y) {
            cell.append(Google())
            }
            row.append(cell)
        }
        element.append(row)
    }

    return element
}