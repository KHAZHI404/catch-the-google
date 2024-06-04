const gridSizeSettings = document.createElement('form');
gridSizeSettings.id = 'grid-settings'

const gridSizeOptions = [
    { value: '4x4', text: '4x4' },
    { value: '5x5', text: '5x5' },
    { value: '6x6', text: '6x6' },
    { value: '7x7', text: '7x7' },
    { value: '8x8', text: '8x8' },
];

const select = document.createElement('select');
select.name = 'gridSize';

gridSizeOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    select.append(optionElement);
});

gridSizeSettings.append(select);

