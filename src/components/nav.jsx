import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  nav_links = [
    {
      nav_id: 1,
      nav_name: 'Home',
      nav_path: '/',
    },
    {
      nav_id: 2,
      nav_name: 'About',
      nav_path: '/about',
    },
    {
      nav_id: 3,
      nav_name: 'Projects',
      nav_path: '/projects',
    },
    {
      nav_id: 4,
      nav_name: 'Contact',
      nav_path: '/contact',
    },
  ];
  render() {
    let darkmode = localStorage.getItem('darkmode');
    const page = document.querySelector('#html');
    const setDefaultTheme = () => {
      darkmode === null || darkmode === '0'
        ? page.classList.remove('darkmode')
        : page.classList.add('darkmode');
    };
    setDefaultTheme();
    const toggleButtonClass = () => {
      page.classList.toggle('darkmode');
      if (darkmode === null || darkmode === '0') {
        localStorage.setItem('darkmode', '1');
      } else {
        localStorage.setItem('darkmode', '0');
      }
    };
    return (
      <header id='nav' className='flex'>
        <Link to='/'>
          <h1 id='logo'>Devz</h1>
        </Link>
        <div id='toggle_body'>
          <span id='toggle_button' onClick={toggleButtonClass}></span>
        </div>
        <input type='checkbox' id='check' />
        <label htmlFor='check'>
          <span className='box one'></span>
          <span className='box two'></span>
          <span className='box three'></span>
        </label>
        <ul className='menu flex'>
          {this.nav_links.map((link) => {
            const { nav_id, nav_path, nav_name } = link;
            return (
              <li
                key={nav_id}
                onClick={() => {
                  window.location.reload();
                }}
              >
                {' '}
                <Link to={nav_path}>{nav_name}</Link>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}
