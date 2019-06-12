import * as actionTypes from '../../actions/actionTypes';

const initialState = {
	products: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS_START:
			return {
				...state
			};
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.products
			};
		case actionTypes.FETCH_PRODUCTS_FAIL:
			return {
				...state
			};
		default:
			return state;
	}
};

export default reducer;
