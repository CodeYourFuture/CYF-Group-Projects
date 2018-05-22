import React, { Component } from 'react';
import Button from './Button';
import './CalcPayment.css';

class Payment extends Component {
  constructor() {
    super()
    this.state = {
      selectedCurrency: 'USD',
      amount: 0,
    };
  }

	selectCurrency = (event) => {
		const currency = event.target.value;
		this.setState({
			selectedCurrency: currency
		});
	};

	render() {
		return (
			<div className="CalcPayment">
				<h2 className="CalcPayment-label">Calculate Payment in GBP</h2>
				<div className="CalcPayment-control">
					<select onChange={this.selectCurrency} defaultValue={this.state.selectedCurrency}>
						{this.props.currencies.map((currency, index) => <option key={index}>{currency}</option>)}
					</select>
          <input className="CalcPayment-amount" type="text" defaultValue="0.00" />
          is worth <span className="CalcPayment-result">???</span> in GBP.
          <div className="CalcPayment-calculate">
            <Button>Calculate</Button>
          </div>
				</div>
			</div>
		)
	}
}

export default Payment;
