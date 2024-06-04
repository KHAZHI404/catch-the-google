import { keyboardControl } from "./keyboard-control.component.js";
import { voiceControl } from "./voice-control.component.js";

export function controlButton() {
    const element = document.createElement('div');

    const keyboardLabel = document.createElement('label');
    const keyboardInput = document.createElement('input');
    keyboardInput.type = 'radio';
    keyboardInput.name = 'controlMethod';
    keyboardLabel.append(keyboardInput);
    keyboardLabel.append(document.createTextNode('Keyboard Control'));
    keyboardInput.addEventListener('change', () => {
        keyboardControl()
        console.log('Keyboard Control выбран');
    })

    const voiceLabel = document.createElement('label');
    const voiceInput = document.createElement('input');
    voiceInput.type = 'radio';
    voiceInput.name = 'controlMethod';
    voiceLabel.append(voiceInput);
    voiceLabel.append(document.createTextNode('Voice Control'));
    voiceInput.addEventListener('change', () => {
        voiceControl()
        console.log('Voice Control выбран');
    })

    element.append(keyboardLabel, voiceLabel);

    return element;
}