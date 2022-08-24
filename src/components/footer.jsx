import React from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
  footer_menu = [
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
    return (
      <footer id='footer' className='flex'>
        <section className='footer_menu_wrapper'>
          <ul id='footer_menu' className='flex'>
            {this.footer_menu.map((link) => {
              const { nav_id, nav_name, nav_path } = link;
              return (
                <li
                  key={nav_id}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <Link to={nav_path}>{nav_name}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className='footer_icons_wrapper flex'>
          <a
            href='https://github.com/johnpmandawe'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.facebook.com/johnpaul.mandawe.92'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='sms:+639569946511,+639075333532'>
            <i className='fa-solid fa-phone'></i>
          </a>
        </section>
        <p id='footer_text'>All rights reserved. Powered by GitHub.</p>
      </footer>
    );
  }
}
