import { useState } from 'react';
import styles from './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';
import { ThemeContextProvider } from './contexts/themeContextProvider';
const App = () => {
  return (
    <ThemeContextProvider>
      <Header/>
      <Outlet/>
    </ThemeContextProvider>
  );
};

export default App;
