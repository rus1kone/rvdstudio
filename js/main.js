const button = document.querySelector('.language-selector__button');
const menu = document.querySelector('.language-selector__menu');

button.addEventListener('click', function () {
  menu.classList.toggle('show');
  button.classList.toggle('show');
});

const phoneButton = document.querySelector('.phone-button');
const phoneMenu = document.querySelector('.phone-menu');

phoneButton.addEventListener('click', () => {
  phoneMenu.classList.toggle('contact-active');
  phoneButton.classList.toggle('pulse-disabled');
});













