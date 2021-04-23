const newValid = document.querySelector('#validation-input');
const limitLength = Number(newValid.getAttribute('data-length'))

function validInput(result) {
    let value = result.currentTarget.value;
    
    if (value.length === limitLength) {
        newValid.classList.add('valid');
        newValid.classList.remove('invalid');
    } else {
        newValid.classList.add('invalid');
        newValid.classList.remove('valid');
    }
}
newValid.addEventListener('blur', validInput)