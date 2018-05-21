import React from 'react';
import './Balance.css';

function Balance(props) {
	return (
		<h2 className="Balance">
			Your account balance is
			<span className="Balance-total">£{props.total}</span>
		</h2>
	)
}

export default Balance;
