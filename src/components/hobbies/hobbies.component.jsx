import React from 'react';

import './hobbies.styles.scss';

const Hobbies = ({ hobbies, showHobbies, count }) => (
  <div className='hobbies'>
    {
      showHobbies && hobbies ? 
      <div>
        {hobbies.map(hobbie => (
          hobbie.isActive ?
          <React.Fragment>
            <span>Name: {hobbie.name}</span> <br/>
            <span>Description: {hobbie.description}</span> <br/>
          </React.Fragment>
          :null
        ))}
        <span>Number of Hobbies: { count(hobbies) }</span>
      </div>
      :
      <div>Hobbies not available!</div>
    }
  </div>
);

export default Hobbies;