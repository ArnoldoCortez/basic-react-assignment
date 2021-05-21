import React from 'react';

import './user.styles.scss';

const User = ({ children, name, description, age }) => (
  <div className='user'>
    { children }
    <h1> { `Name: ${ name }` } </h1>
    <p>{ `Description: ${ description }` }</p>
    <p>{ `Age: ${ age }` }</p>
  </div>
);

export default User;