function getInitialTheme() {
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

function updateTheme(theme) {
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
    '--header-shadow',
    theme === 'light' ? 'var(--shadow)' : 'none'
  );
  root.style.setProperty('--text', theme === 'light' ? 'black' : 'white');
  root.style.setProperty('--color', theme === 'light' ? 'black' : 'white');

  fetch(`../icons/${theme === 'light' ? 'sun' : 'moon'}.svg`)
    .then((response) => response.text())
    .then((svg) => {
      document.querySelector('#theme-toggle').innerHTML = svg;
    })
    .catch(() => {})
}

const root = document.documentElement;
let theme = getInitialTheme();

document.addEventListener('DOMContentLoaded', () => {
  updateTheme(theme);
});

document.querySelector('#theme-toggle').addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  window.localStorage.setItem('theme', theme);
  updateTheme(theme);
});
