const rules = document.querySelector('.rules');

const inputEmail = document.querySelector('.email');

const inputPassword = document.querySelector('.password');

const inputPasswordConfirm = document.querySelector('.passwordConfirm');

const email = document.querySelector('.emailRules');

const password = document.querySelector('.passwordRules');

const passwordConfirm = document.querySelector('.passwordConfirmRules');

document.addEventListener('keydown', (e) => {
    setTimeout(() => {
        if (inputPassword.value.length >= 8) {
            password.style.color = 'green';
        } else {
            password.style.color = 'grey';
        }

        if (
            inputEmail.value.includes('@') &&
            inputEmail.value.includes('.com')
        ) {
            email.style.color = 'green';
        } else {
            email.style.color = 'grey';
        }
    }, 10);
});

inputPasswordConfirm.addEventListener('focus', () => {
    setInterval(() => {
        if (inputPasswordConfirm.value.includes(inputPassword.value)) {
            passwordConfirm.style.color = 'green';
        } else {
            passwordConfirm.style.color = 'grey';
        }
    }, 10);
});
