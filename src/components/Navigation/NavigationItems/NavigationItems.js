import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItem = props => (
	<nav className="Navigation">
		<ul className="NavigationItems">
			<NavigationItem link="/" exact>
				Home
			</NavigationItem>
			<NavigationItem link="/products">Products</NavigationItem>
			<NavigationItem link="/contacts">Contacts</NavigationItem>
			<NavigationItem link="/profile">Profile</NavigationItem>
			<NavigationItem class={'NavLink'} link="/cart">Cart</NavigationItem>
		</ul>
	</nav>
);

export default navigationItem;
