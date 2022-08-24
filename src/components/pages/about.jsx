import React from 'react';

export function About() {
  return (
    <section id='main_content'>
      <p className='content_title'>Coding is FUN!!!</p>
      <div id='about'>
        <p className='page_title'>About the Website</p>
        <p className='pages_title'>
          Devz is a custom,
          <a
            href='https://jquery.com'
            className='link'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            jQuery Website{' '}
          </a>
          inspired website, developed for the following objectives:
        </p>
        <ul id='obj_list' className='flex'>
          <li>Serve as a storage for past and future projects.</li>
          <li>Challenge oneself in coding.</li>
          <li>Ameliorate coding skills.</li>
          <li>Achieve and have something to be proud of.</li>
        </ul>
      </div>
    </section>
  );
}
