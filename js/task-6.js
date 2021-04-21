const newValid = document.querySelector('#validation-input');

function validInput(result) {
    if (result.currentTarget.value.length === Number(newValid.getAttribute('data-length'))) {
        newValid.classList.add('valid');
        if(newValid.classList.contains('invalid')) {
            newValid.classList.remove('invalid');
        }
    } else {
        newValid.classList.add('invalid');
        if (newValid.classList.contains('valid')) {
            newValid.classList.remove('valid');
        }
    }
    if (result.currentTarget.value.length === 0 && newValid.classList.contains('invalid')) {
        newValid.classList.remove('invalid');
    }
}

newValid.addEventListener('blur', validInput);