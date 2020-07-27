const price = document.querySelector('#price');

const title = document.querySelector('#title');

const file = document.querySelector('#file');

const titleRules = document.querySelector('.titleRules');

const priceRules = document.querySelector('.priceRules');

const picture = document.querySelector('.optional');

document.addEventListener('keydown', (e) => {
    setTimeout(() => {
        if (
            (price.value.length >= 1 && !price.value.includes(NaN)) ||
            price.value.includes('.')
        ) {
            priceRules.style.color = 'green';
        } else {
            priceRules.style.color = 'grey';
        }

        if (title.value.length >= 5 && title.value.length <= 40) {
            titleRules.style.color = 'green';
        } else {
            titleRules.style.color = 'grey';
        }
    }, 10);
});

file.addEventListener('click', () => {
    setInterval(() => {
        if (file.value.length >= 1) {
            picture.style.color = 'green';
        } else {
            picture.style.color = 'grey';
        }
    }, 10);
});
