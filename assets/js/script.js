const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
})

const menu = document.querySelector('section#brand ul li');
menu.addEventListener('click', function() {
    menu.style.paddingTop = '30px';
})