import React, { Component } from 'react';
import Balance from './components/Balance';
import MakePayment from './components/MakePayment';
import Payments from './components/Payments';
import currencies from './data/currencies';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currencies: currencies,
      balance: 87.43, // This is the current balance in GBP
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Payments</h1>
        </header>
        <Balance total={this.state.balance} currencies={this.state.currencies} />
        <MakePayment currencies={this.state.currencies} />
        <h2>Payments</h2>
        <Payments />
      </div>
    );
  }
}

export default App;
