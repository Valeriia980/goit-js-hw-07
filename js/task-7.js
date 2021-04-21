const input = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

function newInput(event) {
    inputText.style.fontSize = event.currentTarget.value + 'px';
}

input.addEventListener('input', newInput);
