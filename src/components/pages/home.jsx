import React from 'react';
import chatApp from '../../img/chat-app/chat_app.PNG';
import socialApp from '../../img/social-network-app/login.PNG';
import tdlApp from '../../img/tdl-app/tdl_app.PNG';
import snakeGame from '../../img/snake-game/snake.PNG';

export function Home() {
  return (
    <section id='main_content'>
      <p className='content_title'>Coding is FUN!!!</p>
      <div id='home'>
        <p className='pages_title'>
          The{' '}
          <a
            href='https://jquery.com'
            className='link'
            target='_blank'
            rel='noreferrer'
          >
            jQuery Website
          </a>{' '}
          inspired project.
        </p>
        <div className='projects_wrapper flex'>
          <p className='page_title'>Sample Projects</p>
          <p className='app_name'>Chat Application in PHP</p>
          <img src={chatApp} className='img' alt='' />
          <p className='app_name'>Social Networking Web Application in PHP</p>
          <img src={socialApp} className='img' alt='' />
          <p className='app_name'>To-do List Application in PHP</p>
          <img src={tdlApp} className='img' alt='' />
          <p className='app_name'>Snake Game in Python (OOP)</p>
          <img src={snakeGame} className='img' alt='' />
        </div>
        <div className='contact_wrapper'></div>
      </div>
    </section>
  );
}
