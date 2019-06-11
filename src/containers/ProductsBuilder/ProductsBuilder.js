import React ,{ Component} from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions/index';

class ProductsBuilder extends Component {
	componentDidMount() {
		this.props.onInitProducts();
	}

	productsShowHandler() {
		console.log(this.props.products);
	}
	render() {
		return (
			<Aux>
               <h1></h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductsBuilder, axios);
