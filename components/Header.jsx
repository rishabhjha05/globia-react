import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/Theme';

const Header = () => { 
  const {theme,setTheme}=useTheme();
  
  localStorage.setItem('mode',JSON.stringify(theme));
  return (
    <header className={theme === "dark" ? "dark" : "light"}>
      <h2>Where in the world?</h2>
      <button
        id="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="material-symbols-outlined">
          <i className="fa-regular fa-moon"></i>
        </span>
        Dark Mode
      </button>
    </header>
  );
};
export default Header;
