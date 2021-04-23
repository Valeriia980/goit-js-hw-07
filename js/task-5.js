const newInp = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

function inputChange(result) {
    let name = result.currentTarget.value;
    newInp.span.textContent = name.length === 0 ? 'незнакомец' : name;
}

newInp.input.addEventListener('input', inputChange);  