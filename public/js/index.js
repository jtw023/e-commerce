// alerts on click for social  media buttons
const facebook = document.querySelector('.facebook');
const twitter = document.querySelector('.twitter');
const linkedin = document.querySelector('.linkedin');
const dribble = document.querySelector('.dribble');
const instagram = document.querySelector('.instagram');

facebook.addEventListener('click', (e) => {
    alert('Link to your facebook account here.');
});

twitter.addEventListener('click', (e) => {
    alert('Link to your twitter account here.');
});
linkedin.addEventListener('click', (e) => {
    alert('Link to your linkedin account here.');
});
dribble.addEventListener('click', (e) => {
    alert('Link to your dribble account here.');
});
instagram.addEventListener('click', (e) => {
    alert('Link to your instagram account here.');
});

// javascript for actual products
const product1 = document.querySelector('.productlistitem1');
const product2 = document.querySelector('.productlistitem2');
const product3 = document.querySelector('.productlistitem3');
const product4 = document.querySelector('.productlistitem4');
const product5 = document.querySelector('.productlistitem5');
const product6 = document.querySelector('.productlistitem6');
const product7 = document.querySelector('.productlistitem7');
const product8 = document.querySelector('.productlistitem8');
const product9 = document.querySelector('.productlistitem9');
const product10 = document.querySelector('.productlistitem10');
const product11 = document.querySelector('.productlistitem11');
const product12 = document.querySelector('.productlistitem12');
const product13 = document.querySelector('.productlistitem13');
const product14 = document.querySelector('.productlistitem14');
const product15 = document.querySelector('.productlistitem15');

const productTitle1 = document.querySelector('.productTitle1');
const productTitle2 = document.querySelector('.productTitle2');
const productTitle3 = document.querySelector('.productTitle3');
const productTitle4 = document.querySelector('.productTitle4');
const productTitle5 = document.querySelector('.productTitle5');
const productTitle6 = document.querySelector('.productTitle6');
const productTitle7 = document.querySelector('.productTitle7');
const productTitle8 = document.querySelector('.productTitle8');
const productTitle9 = document.querySelector('.productTitle9');
const productTitle10 = document.querySelector('.productTitle10');
const productTitle11 = document.querySelector('.productTitle11');
const productTitle12 = document.querySelector('.productTitle12');
const productTitle13 = document.querySelector('.productTitle13');
const productTitle14 = document.querySelector('.productTitle14');
const productTitle15 = document.querySelector('.productTitle15');

if (productTitle1.innerText.length === 0) {
    product1.style.display = 'none';
}
if (productTitle2.innerText.length === 0) {
    product2.style.display = 'none';
    product1.style.borderRight = '2px solid black';
}
if (productTitle3.innerText.length === 0) {
    product3.style.display = 'none';
    product2.style.borderRight = '2px solid black';
}
if (productTitle4.innerText.length === 0) {
    product4.style.display = 'none';
    product1.style.borderBottom = '2px solid black';
}
if (productTitle5.innerText.length === 0) {
    product5.style.display = 'none';
    product2.style.borderBottom = '2px solid black';
    product4.style.borderRight = '2px solid black';
}
if (productTitle6.innerText.length === 0) {
    product6.style.display = 'none';
    product3.style.borderBottom = '2px solid black';
    product5.style.borderRight = '2px solid black';
}
if (productTitle7.innerText.length === 0) {
    product7.style.display = 'none';
    product4.style.borderBottom = '2px solid black';
}
if (productTitle8.innerText.length === 0) {
    product8.style.display = 'none';
    product5.style.borderBottom = '2px solid black';
    product7.style.borderRight = '2px solid black';
}
if (productTitle9.innerText.length === 0) {
    product9.style.display = 'none';
    product6.style.borderBottom = '2px solid black';
    product8.style.borderRight = '2px solid black';
}
if (productTitle10.innerText.length === 0) {
    product10.style.display = 'none';
    product7.style.borderBottom = '2px solid black';
}
if (productTitle11.innerText.length === 0) {
    product11.style.display = 'none';
    product10.style.borderRight = '2px solid black';
    product8.style.borderBottom = '2px solid black';
}
if (productTitle12.innerText.length === 0) {
    product12.style.display = 'none';
    product11.style.borderRight = '2px solid black';
    product9.style.borderBottom = '2px solid black';
}
if (productTitle13.innerText.length === 0) {
    product13.style.display = 'none';
    product10.style.borderBottom = '2px solid black';
}
if (productTitle14.innerText.length === 0) {
    product14.style.display = 'none';
    product11.style.borderBottom = '2px solid black';
    product13.style.borderRight = '2px solid black';
}
if (productTitle15.innerText.length === 0) {
    product15.style.display = 'none';
    product12.style.borderBottom = '2px solid black';
    product14.style.borderRight = '2px solid black';
}
