import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import OptionContainer from './components/OptionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
      
    );
  }
}

export default App;
