const toggle = document.querySelector('#theme-toggle-js');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', toggle.checked);
});
