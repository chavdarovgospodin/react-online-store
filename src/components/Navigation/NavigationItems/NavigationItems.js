import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItem = props => (
	<nav className="Navigation">
		<ul className="NavigationItems">
			<NavigationItem link="/" exact>
				Home
			</NavigationItem>
			<NavigationItem link="/cart">Cart</NavigationItem>
			<NavigationItem link="/products">Products</NavigationItem>
			<NavigationItem link="/profile">Profile</NavigationItem>
		</ul>
	</nav>
);

export default navigationItem;
