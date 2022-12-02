// VARIABLES
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const nav = document.querySelector('#nav');

// EVENTS
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// FUNCTIONS
function openMenu(){
    nav.classList.add('menu-active');
}

function closeMenu(){
    nav.classList.remove('menu-active');
}