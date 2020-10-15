const bodyItem = document.querySelector('body');
const switchItem = document.querySelector('#theme-switch-toggle');
let theme = localStorage.getItem('theme');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchItem.addEventListener('change', onChange);

if (theme === Theme.DARK) {
  bodyItem.classList.add(Theme.DARK);
  bodyItem.classList.remove(Theme.LIGHT);
  switchItem.setAttribute('checked', true);
} else {
  bodyItem.classList.remove(Theme.DARK);
  bodyItem.classList.add(Theme.LIGHT);
  switchItem.removeAttribute('checked');
}

function onChange() {
  bodyItem.classList.toggle(Theme.DARK);
  bodyItem.classList.toggle(Theme.LIGHT);

  if (localStorage.getItem('theme') === Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.DARK);
  }
}
