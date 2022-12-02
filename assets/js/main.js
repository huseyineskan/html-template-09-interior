// JS CODE
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const nav = document.querySelector('#nav');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu(){
    nav.classList.add('menu-active');
}

function closeMenu(){
    nav.classList.remove('menu-active');
}