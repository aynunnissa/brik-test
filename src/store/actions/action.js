import * as types from './type';

// Card
export const addToCart = () => dispatch => {
  dispatch({
    type: types.ADD_TO_CART,
  });
};
