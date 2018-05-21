import React, { Component } from 'react';
import Button from './Button';
import './MakePayment.css';

class Payment extends Component {
  constructor() {
    super()
    this.state = {
      selectedCurrency: 'USD',
      amount: 0,
    };
  }

	selectCurrency = (event) => {
		let currency = event.target.value;
		this.setState({
			selectedCurrency: currency
		});
	};

	render() {
		return (
			<div className="MakePayment">
				<h2 className="MakePayment-label">Make a Payment</h2>
				<div className="MakePayment-control">
					<select onChange={this.selectCurrency} defaultValue={this.state.selectedCurrency}>
						{this.props.currencies.map((currency, index) => <option key={index}>{currency}</option>)}
					</select>
          <input className="MakePayment-amount" type="text" defaultValue="0.00" />
					<input className="MakePayment-description" type="text" placeholder="What is this payment for?" />
					<Button label="Pay" />
				</div>
			</div>
		)
	}
}

export default Payment;
