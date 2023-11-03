function initTheme() {
  const persistedColorPreference = window.localStorage.getItem('theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

function loadTheme() {
  root.style.setProperty('--theme', theme);
  root.style.setProperty(
    '--background',
    theme === 'light' ? 'var(--light-background)' : 'var(--dark-background)'
  );
  root.style.setProperty(
    '--header-background',
    theme === 'light'
      ? 'var(--header-light-background)'
      : 'var(--header-dark-background)'
  );
  root.style.setProperty(
    '--nav-background',
    theme === 'light'
      ? 'var(--nav-light-background)'
      : 'var(--nav-dark-background)'
  );
  root.style.setProperty(
    '--header-shadow',
    theme === 'light' ? 'var(--shadow)' : 'none'
  );
  root.style.setProperty('--text', theme === 'light' ? 'black' : 'white');
  root.style.setProperty('--color', theme === 'light' ? 'black' : 'white');

  fetch(`/icons/${theme === 'light' ? 'sun' : 'moon'}.svg`)
    .then((response) => response.text())
    .then((svg) => {
      themeTogglers.forEach(themeToggler => {
        themeToggler.innerHTML = svg;
      });
    })
    .catch(() => {});
}

function updateTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  window.localStorage.setItem('theme', theme);
  loadTheme();
}

const root = document.documentElement;
const themeTogglers = document.querySelectorAll('.theme-toggler');

let theme = initTheme();

document.addEventListener('DOMContentLoaded', loadTheme);

themeTogglers.forEach(themerToggler => themerToggler.addEventListener('click', updateTheme));
