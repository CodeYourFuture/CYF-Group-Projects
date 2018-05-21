import React, { Component } from 'react';
import Balance from './components/Balance.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      balance: 87.43,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Payments</h1>
        </header>
        <Balance total={this.state.balance} />
      </div>
    );
  }
}

export default App;
