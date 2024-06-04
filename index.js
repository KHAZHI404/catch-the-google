import { Game } from './components/Game/game.component.js';
import { addListener } from './data.js';

export function rerender() {
    const rootElement = document.getElementById('root');

    rootElement.innerHTML = ''

    const game = Game()
    rootElement.append(game)
    

};

rerender();
addListener(rerender);


//добавить возможность изменения размера сетки, очков для победы и проигрыша как на макете