const newInp = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

function inputChange(result) {
    if (result.currentTarget.value.length === 0) {
        newInp.span.textContent = 'незнакомец';
    }
    else { newInp.span.textContent = result.currentTarget.value; }
}

newInp.input.addEventListener('input', inputChange);  