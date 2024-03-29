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
    '--first-action-background',
    theme === 'light'
      ? 'var(--first-action-light-background)'
      : 'var(--first-action-dark-background)'
  );
  root.style.setProperty(
    '--second-action-background',
    theme === 'light'
      ? 'var(--second-action-light-background)'
      : 'var(--second-action-dark-background)'
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
    '--card-background',
    theme === 'light'
      ? 'var(--card-light-background)'
      : 'var(--card-dark-background)'
  );
  root.style.setProperty(
    '--toc-background',
    theme === 'light'
      ? 'var(--toc-light-background)'
      : 'var(--toc-dark-background)'
  );
  root.style.setProperty(
    '--about-card-background',
    theme === 'light'
      ? 'var(--about-card-light-background)'
      : 'var(--about-card-dark-background)'
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
  root.style.setProperty('--text', theme === 'light' ? 'var(--black)' : 'var(--white)');
  root.style.setProperty('--color', theme === 'light' ? 'var(--black)' : 'var(--white)');

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
