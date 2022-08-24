import React from 'react';

export function Contact() {
  return (
    <section id='main_content'>
      <p className='content_title'>Coding is FUN!!!</p>
      <div id='contact'>
        <p className='page_title'>Contact me</p>
        <p className='pages_title'>
          You can reach me through
          <a
            href='https://www.facebook.com/johnpaul.mandawe.92'
            target='_blank'
            className='link'
            rel='noreferrer'
          >
            {' '}
            Facebook{' '}
          </a>
          or : <br />
        </p>
        <form
          action='#'
          className='flex contact_form'
          method='POST'
          autoComplete='off'
        >
          <p>Email me</p>
          <input type='email' name='email' placeholder='Email...' />
          <textarea
            name='content'
            cols='30'
            rows='10'
            placeholder='Write something...'
          ></textarea>
          <button type='submit'>
            SEND <i className='fa-solid fa-paper-plane'></i>
          </button>
        </form>
      </div>
    </section>
  );
}
