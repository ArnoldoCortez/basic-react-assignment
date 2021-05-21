import React from 'react';
import './App.css';

import Avatar from './components/avatar/avatar.component';
import User from './components/user/user.component';
import Hobbies from './components/hobbies/hobbies.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      showHobbies: true
    }
  }

  handleShowHobbies = () => {
    this.setState({showHobbies: !this.state.showHobbies});
  }

  render() {
    return (
      <div className="App">
        <User name='Arnoldo Cortez' description='Software Developer' age='26' >
          <Avatar />
        </User>
        <Hobbies 
          hobbies={[{name:'Soccer', description:'I love soccer', isActive: true}, {name:'Video Games', description:'I love video games', isActive: true}]}
          showHobbies={ this.state.showHobbies }
          count={ (hobbies)=> hobbies.filter(hobbie => hobbie.isActive).length }
        />
        <button onClick={ this.handleShowHobbies }>
          {this.state.showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}
        </button>
      </div>
    );
  }
}

export default App;
