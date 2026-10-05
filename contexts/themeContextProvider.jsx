import { useState } from 'react';
import { ThemeContext } from './Theme';

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('mode')
      ? JSON.parse(localStorage.getItem('mode'))
      : 'light',
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
