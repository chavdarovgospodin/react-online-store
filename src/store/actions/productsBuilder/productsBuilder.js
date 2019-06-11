import * as actionTypes from '../actionTypes';

import axios from '../../../axios';

export const fetchProductsSuccess = products => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		products: products
	};
};

export const fetchProductsFail = error => {
	return {
		type: actionTypes.FETCH_PRODUCTS_FAIL,
		error: error
	};
};

export const fetchProductsStart = () => {
	return {
		type: actionTypes.FETCH_PRODUCTS_START
	};
};

export const fetchProducts = () => {
	return dispatch => {
		dispatch(fetchProductsStart());
		axios
			.get('/products.json')
			.then(response => {
                console.log(response.data)
				dispatch(fetchProductsSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchProductsFail(error));
			});
	};
};
