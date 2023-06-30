import { useReducer, useEffect, createContext } from 'react';

export const ThemeContext = createContext<{ mode: string; toggle: () => void }>(
  {
    mode: 'light',
    toggle: () => {},
  }
);

const reducer = (state: string, action: { type: string }) => {
  switch (action.type) {
    case 'TOGGLE':
      return state === 'light' ? 'dark' : 'light';
    case 'DARK':
      return 'dark';
    case 'LIGHT':
      return 'light';
    default:
      return state;
  }
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [mode, dispatch] = useReducer(reducer, 'light');
  const toggle = () => {
    const root = window.document.documentElement;
    const lightFavicon = document.querySelector('link#light-favicon')!;
    const darkFavicon = document.querySelector('link#dark-favicon')!;

    if (mode === 'dark') {
      window.localStorage.setItem('mode', 'light');
      root.style.setProperty('--background', '#F9F9F9');
      root.style.setProperty('--secondary-background', 'white');
      root.style.setProperty('--text', 'black');
      root.style.setProperty('--text-inverted', 'white');
      document.head.append(darkFavicon);
    } else {
      window.localStorage.setItem('mode', 'dark');
      root.style.setProperty('--background', '#262626');
      root.style.setProperty('--secondary-background', '#2F2F2F');
      root.style.setProperty('--text', 'white');
      root.style.setProperty('--text-inverted', 'black');
      document.head.append(lightFavicon);
    }

    dispatch({ type: 'TOGGLE' });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialThemeMode = root.style.getPropertyValue('--mode');

    dispatch({ type: initialThemeMode === 'dark' ? 'DARK' : 'LIGHT' });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
