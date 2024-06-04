export function toggleButton() {

    const element = document.createElement('label');
    element.append('MUTE')

    const input = document.createElement('input');
    input.type = 'checkbox';
    element.append(input)

    element.addEventListener('click', () => {
        _toggleSound();
        console.log('Sounds is muted')
    });

    return element;
}

let isSoundEnabled = true;
const _toggleSound = () => {
    isSoundEnabled = !isSoundEnabled;
}

export function playWinSound() {
    if (isSoundEnabled) {
        const audio = document.createElement("audio");
        audio.src = '/assets/songs/win.mp3';
        audio.play();
    }
}

export function playLoseSound() {
    if (isSoundEnabled) {
        const audio = document.createElement("audio");
        audio.src = '../assets/songs/lose.mp3';
        audio.play();
    }
}