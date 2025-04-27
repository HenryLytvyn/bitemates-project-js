const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('visually-hidden');
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('visually-hidden');
  document.body.classList.remove('no-scroll');
});