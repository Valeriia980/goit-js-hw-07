const inputNew = document.querySelector('input');
const createElementBtn = document.querySelector('[data-action="render"]');
const deleteElementBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

function createBoxes() {
    const size = 30;
    
    for (let i = 0; i < inputNew.value; i += 1) {   
    const max = 256;
    let pink = Math.floor(Math.random() * max);
    let purple = Math.floor(Math.random() * max);
        let blue = Math.floor(Math.random() * max);
        
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size+i*10}px`;
        box.style.height = `${size+i*10}px`;
        box.style.backgroundColor = `rgb(${pink}, ${purple}, ${blue})`;
        box.style.marginRight = "10px";
        box.style.marginTop = "10px";
        boxes.append(box);
    }
}
createElementBtn.addEventListener('click', createBoxes);
deleteElementBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxes.innerHTML = '';
    inputNew.value = '';
}