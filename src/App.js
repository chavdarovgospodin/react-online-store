import React, { Component } from 'react';
import Navigation from '../src/components/Navigation/NavigationItems/NavigationItems';
import ProductBuilder from './containers/ProductsBuilder/ProductsBuilder';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UnderDevelopment from './components/UI/UnderDevelopment/underDevelopment';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route exact path="/" component={UnderDevelopment} />
						<Route path="/cart" component={UnderDevelopment} />
						<Route path="/profile" component={UnderDevelopment} />
						<Route path="/contacts" component={UnderDevelopment} />
						<Route path="/products" component={ProductBuilder} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
