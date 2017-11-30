import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Statefull Time</h1>
        </header>
         <Timer />
      </div>
    );
  }
}

export default App;
