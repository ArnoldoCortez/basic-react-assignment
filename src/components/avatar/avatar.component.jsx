import React from 'react';
import './avatar.styles.scss';

const url = 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80';

const Avatar = () => (
  <div className='avatar'>
    <img src={ url } alt='Avatar'/>
  </div>
);

export default Avatar;