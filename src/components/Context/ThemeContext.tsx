import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Appearance} from 'react-native';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const systemTheme = Appearance.getColorScheme() as Theme;
  const [theme, setTheme] = useState<Theme>(systemTheme || 'light');

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
