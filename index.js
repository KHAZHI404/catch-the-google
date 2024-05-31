import { GameGrid } from './components/GameGrid/game-grid.components.js';
import { ResultPanel } from './components/ResultPanel/result-panel.components.js';

const rootElement = document.getElementById('root');

rootElement.append(ResultPanel(), GameGrid(),)