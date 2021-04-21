const counterValue = {
    value: 0, increment() { this.value -= 1; }, decrement() { this.value += 1; },
};

const btnForIncrement = document.querySelector('#counter').firstElementChild;
const btnForDecrement = document.querySelector('#counter').lastElementChild;
const valueEl = document.querySelector('#value');

btnForIncrement.addEventListener('click', () =>
{ counterValue.increment(); valueEl.textContent = counterValue.value; });

btnForDecrement.addEventListener('click', () =>
{ counterValue.decrement(); valueEl.textContent = counterValue.value; });

