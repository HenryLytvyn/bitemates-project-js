const toggle = document.querySelector('#theme-toggle-js');
const body = document.body;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  document.body.classList.toggle('dark', toggle.checked);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}
