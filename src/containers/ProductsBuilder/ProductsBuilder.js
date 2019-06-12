import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Product from '../../components/Product/Product';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class ProductsBuilder extends Component {
	componentWillMount() {
		this.props.onInitProducts();
	}
	componentDidMount() {
		this.products = this.props.products;
	}

	render() {
		let products = [];
		let dummyProducs = null;
		for (let key in this.props.products) {
			products.push({
				id: this.props.products[key].id,
				name: key,
				quantity: this.props.products[key].quantity,
				img: this.props.products[key].image
			});
		}

		dummyProducs = (
			<div>
				{products.map(product => (
					<Product
						key={product.id}
						img={product.img}
						name={product.name}
						quantity={product.quantity}
					/>
				))}
			</div>
		);

		let product = this.props.products ? dummyProducs : <Spinner />;

		return (
			<Aux>
				<ul>{product}</ul>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitProducts: () => dispatch(actions.fetchProducts())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsBuilder, axios);
