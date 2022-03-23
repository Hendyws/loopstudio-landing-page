const btnMenu = document.querySelector('.btn-menu');
function toggleMenu () {
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');
}
btnMenu.addEventListener('click', toggleMenu);