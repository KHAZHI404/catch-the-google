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





//как отображать звук когда проиграли выиграли? сделать самостоятельно
//на главном экране сделать возможность выбора управления голосом или клавиатурой
//если сказано несколько слов подряд, сделать чтобы все они разделились и использовались как ход
//добавить возможность изменения размера сетки как на макете
//подсчет игроков, визуализацию кто выиграл кто проиграл кто-то выиграл либо оба проиграли сколько быллов у кого было 
