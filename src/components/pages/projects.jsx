import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const chat_app = importAll(
  require.context('../../img/chat-app', false, /\.(PNG|jpe?g|svg)$/)
);
const tdl_app = importAll(
  require.context('../../img/tdl-app', false, /\.(PNG|jpe?g|svg)$/)
);
const snake_game = importAll(
  require.context('../../img/snake-game', false, /\.(PNG|jpe?g|svg)$/)
);
const social_app = importAll(
  require.context('../../img/social-network-app', false, /\.(PNG|jpe?g|svg)$/)
);

export function Projects() {
  return (
    <section id='main_content'>
      <p className='content_title'>Coding is FUN!!!</p>
      <div id='projects'>
        <p className='about_title page_title'>Personal Projects</p>
        <ul id='project_list' className='flex'>
          <li>
            <p className='app_name'>Chat Application in PHP</p>
            <p className='description'>
              I made this app from a youtube tutorial. The only difference is
              that, I converted MySQLi (used on the tutorial) to PDO (my
              preference). This is the link of the tutorial that I am referring
              to {' -> '}
              <a
                href='https://youtu.be/VnvzxGWiK54'
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                Click here.
              </a>
            </p>
            <div className='slider'>
              <img
                src={chat_app['chat_app.PNG']}
                className='img chat_app_holder'
                alt=''
              />
              <img
                src={chat_app['signup.PNG']}
                className='img chat_app_holder'
                alt=''
              />
              <img
                src={chat_app['chat_section.PNG']}
                className='img chat_app_holder'
                alt=''
              />
              <img
                src={chat_app['conversation.PNG']}
                className='img chat_app_holder'
                alt=''
              />
            </div>
          </li>
          <li>
            <p className='app_name'>To-do List Application in PHP</p>
            <p className='description'>
              This is just a very simple app I created when I was an intern at a
              Japanese company which offers web development as one of their
              services. You can visit their site {' -> '}
              <a
                href='https://growforwardjp.com'
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                Click here.
              </a>
            </p>
            <div className='slider'>
              <img
                src={tdl_app['tdl_app.PNG']}
                className='img tdl_app_holder'
                alt=''
              />
              <img
                src={tdl_app['create.PNG']}
                className='img tdl_app_holder'
                alt=''
              />
              <img
                src={tdl_app['view.PNG']}
                className='img tdl_app_holder'
                alt=''
              />
              <img
                src={tdl_app['check.PNG']}
                className='img tdl_app_holder'
                alt=''
              />
              <img
                src={tdl_app['edit.PNG']}
                className='img tdl_app_holder'
                alt=''
              />
            </div>
          </li>
          <li>
            <p className='app_name'>Snake Game in Python</p>
            <p className='description'>
              I also made this game from a youtube tutorial but the key
              difference is that, I converted it from plain code into OOP. You
              can check the tutorial here {' -> '}
              <a
                href='https://youtu.be/BP7KMlbvtOo'
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                Click here.
              </a>
            </p>
            <div className='slider'>
              <img
                src={snake_game['snake.PNG']}
                className='img snake_app_holder'
                alt=''
              />
              <img
                src={snake_game['start.PNG']}
                className='img snake_app_holder'
                alt=''
              />
              <img
                src={snake_game['end.PNG']}
                className='img snake_app_holder'
                alt=''
              />
            </div>
          </li>
          <li>
            <p className='app_name'>Social Networking Web Application in PHP</p>
            <p className='description'>
              This is by far the most complex app I've done. I wrote this for 2
              weeks and I am proud that I made something bigger than I usually
              develop. This is a hosted app at
              <a
                href='https://infinityfree.net'
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                infinityfree.net.{' '}
              </a>
              You can check the app but I would like to remind you that I am
              only using its free tier so the link will appear as an insecure
              one. It would be better if you access the link in incognito mode.
              Nevertheless, you can give it a try here. {' -> '}
              <a
                href='http://elite.42web.io'
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                Click here.
              </a>
            </p>
            <div className='slider'>
              <img
                src={social_app['login.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['signup.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['home.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['posts.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['friends.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['profile.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['notifs.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['update_post.PNG']}
                className='img social_app_holder'
                alt=''
              />
              <img
                src={social_app['visits.PNG']}
                className='img social_app_holder'
                alt=''
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
