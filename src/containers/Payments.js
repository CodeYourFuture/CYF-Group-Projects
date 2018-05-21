import React from 'react';
import './Payments.css';

function Payments(props) {
	return (
		<table className="Payments">
			<thead>
				<tr>
					<th>Cur</th>
					<th>Amount</th>
					<th className="Payments-description">Description</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>GBP</td>
					<td>6.89</td>
					<td>Dinner with friends at a local restaurant</td>
					<td>Pending</td>
				</tr>
				<tr>
					<td>USD</td>
					<td>12.23</td>
					<td>New headphones purchased from Amazon with free delivery</td>
					<td>Complete</td>
				</tr>
				<tr>
					<td>AUD</td>
					<td>28.74</td>
					<td>Groceries for the week</td>
					<td>Complete</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Payments;
