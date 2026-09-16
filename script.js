const button = document.querySelector('.menu-button');
const nav = document.querySelector('.header nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
