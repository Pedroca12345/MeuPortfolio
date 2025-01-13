const menuMobile = document.querySelector('.menu-mobile-container');
const buttonOpenMenu = document.querySelector('.button-abrir-menu');
const buttonsMenu = document.querySelectorAll('.menu-mobile a');

buttonOpenMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('opened');
});

buttonsMenu.forEach((button) => {
    button.addEventListener('click', () => {
        menuMobile.classList.remove('opened');
    });
});
