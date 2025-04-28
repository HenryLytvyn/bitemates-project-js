const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const menuLinks = document.querySelectorAll('.mobile-menu-list a');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('visually-hidden');
  document.body.classList.add('no-scroll');
   setTimeout(() => {
    mobileMenu.classList.add('active');
  }, 10); 
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  setTimeout(() => {
    mobileMenu.classList.add('visually-hidden');
  }, 900); 
  document.body.classList.remove('no-scroll');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('visually-hidden');
    setTimeout(() => {
      mobileMenu.classList.add('visually-hidden');
    }, 900); 
    document.body.classList.remove('no-scroll');
  });
});