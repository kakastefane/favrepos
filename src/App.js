import React from 'react';
import Routes from './routes';
import Credits from './components/Credits';
import Header from './components/Header';

import GlobalStyles from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
      <Credits />
    </>
  );
}