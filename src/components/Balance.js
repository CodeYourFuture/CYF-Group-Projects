import React, { Component } from 'react';
import './Balance.css';

class Balance extends Component {
  constructor() {
    super()
    this.state = {
      alternateCurrency: 'USD',
    };
  }

	render() {
		return (
			<div className="Balance">
				<h2 className="Balance-title">
					Your account balance is
					<span className="Balance-total">£{this.props.total}</span>
				</h2>
				<div className="Balance-alt">
					Your balance is ??? in
					<select defaultValue={this.state.alternateCurrency}>
						{this.props.currencies.map((currency, index) => <option key={index}>{currency}</option>)}
					</select>
					.
				</div>
			</div>
		)
	}
}

export default Balance;
