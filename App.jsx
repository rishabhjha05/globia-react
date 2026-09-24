import { useState } from 'react';
import styles from './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';
const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default App;
