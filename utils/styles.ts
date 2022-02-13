export const initStyles = () => `
  function getInitialThemeMode() {
    const persistedColorPreference = window.localStorage.getItem('mode');
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

  (() => {
    const mode = getInitialThemeMode();
    const root = document.documentElement;
    const lightFavicon = document.querySelector('link#light-favicon');
    const darkFavicon = document.querySelector('link#dark-favicon');

    root.style.setProperty('--mode', mode);
    root.style.setProperty(
      '--background',
      mode === 'light' ? '#F9F9F9' : '#262626'
    );
    root.style.setProperty(
      '--secondary-background',
      mode === 'light' ? 'white' : '#2F2F2F'
    );
    root.style.setProperty(
      '--text',
      mode === 'light' ? 'black' : 'white'
    );
    root.style.setProperty(
      '--text-inverted',
      mode === 'light' ? 'white' : 'black'
    );
    document.head.append(mode === 'light' ? darkFavicon : lightFavicon);
  })();
`;
