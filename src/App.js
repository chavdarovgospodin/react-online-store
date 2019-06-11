import React from 'react';
import NavigationItems from '../src/components/Navigation/NavigationItems/NavigationItems';
import { BrowserRouter } from 'react-router-dom';
import Aux from '../src/hoc/Auxiliary/Auxiliary';
import ProductBuilder from './containers/ProductsBuilder/ProductsBuilder';

const app = () => (
	<Aux>
		<BrowserRouter>
			<NavigationItems />
      <ProductBuilder/>
		</BrowserRouter>
	</Aux>
);
export default app;
