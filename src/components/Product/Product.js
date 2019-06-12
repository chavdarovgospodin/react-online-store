import React from 'react';
import './Product.css';

const product = props => (
	<li className="Product">
		<img src={props.img} alt={props.name} />
		<span className="Span">Quantity: {props.quantity}</span>
	</li>
);

export default product;
