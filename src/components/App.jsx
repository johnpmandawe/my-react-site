import React from 'react';
import { HashRouter } from 'react-router-dom';
import '../styles/common.css';
import '../styles/style.css';
import { Nav } from './nav';
import { Main } from './main';
import { Footer } from './footer';

export function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Main />
        <Footer />
      </HashRouter>
    </>
  );
}
