const inputNew = document.querySelector('input');
const createElementBtn = document.querySelector('[data-action="render"]');
const deleteElementBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

const primary = inputNew.value;

const randomColor = () => { 
const firstColor = Math.round(Math.random() * (255 - 1) + 1);
const secondColor = Math.round(Math.random() * (255 - 1) + 1);
const thirdColor = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${firstColor},${secondColor},${thirdColor})`
}

const someSize = 30;
const sizeNew = 10;

createElementBtn.addEventListener('click', ()=>createBoxes(+inputNew.value))
deleteElementBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) { 
    const boxesNew = [...new Array(amount)]
    const arrayBoxes = boxesNew.map((_, i) => {
    return    `<div style="width: ${someSize + sizeNew * i}px; height:${someSize + sizeNew * i}px; background-color: ${randomColor()}"></div>`
    }).join('')

    boxes.innerHTML = arrayBoxes
    }

function destroyBoxes() {
   boxes.innerHTML = ''
    inputNew.value = ''
}