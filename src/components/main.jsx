import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

export function Main() {
  return (
    <React.Fragment>
      <main id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}
