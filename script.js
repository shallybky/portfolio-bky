const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('header nav ul');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
