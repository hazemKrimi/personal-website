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
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', theme === 'light' ? '#FBFBFB' : '#1D1B1B');
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
    '--input-background',
    theme === 'light'
      ? 'var(--input-light-background)'
      : 'var(--input-dark-background)'
  );
  root.style.setProperty(
    '--button-background',
    theme === 'light'
      ? 'var(--button-light-background)'
      : 'var(--button-dark-background)'
  );
  root.style.setProperty(
    '--project-card-background',
    theme === 'light'
      ? 'var(--project-card-light-background)'
      : 'var(--project-card-dark-background)'
  );
  root.style.setProperty(
    '--footer-background',
    theme === 'light'
      ? 'var(--footer-light-background)'
      : 'var(--footer-dark-background)'
  );
  root.style.setProperty(
    '--header-shadow',
    theme === 'light' ? 'var(--shadow)' : 'none'
  );
  root.style.setProperty('--text', theme === 'light' ? 'black' : 'white');
  root.style.setProperty('--color', theme === 'light' ? 'black' : 'white');

  document.querySelector(
    theme === 'light' ? 'header .moon' : 'header .sun'
  ).style.display = 'none';
  document.querySelector(
    theme === 'light' ? 'nav .moon' : 'nav .sun'
  ).style.display = 'none';
  document.querySelector(
    theme === 'light' ? 'header .sun' : 'header .moon'
  ).style.display = 'block';
  document.querySelector(
    theme === 'light' ? 'nav .sun' : 'nav .moon'
  ).style.display = 'block';
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

themeTogglers.forEach((themerToggler) =>
  themerToggler.addEventListener('click', updateTheme)
);
