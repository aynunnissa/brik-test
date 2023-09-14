import * as types from './type';

// Cart
export const resetCart = () => dispatch => {
  dispatch({
    type: types.RESET_CART,
  });
};
export const addToCart = product => dispatch => {
  dispatch({
    type: types.ADD_TO_CART,
    product,
  });
};
export const incCartQty = productId => dispatch => {
  dispatch({
    type: types.INC_CART_QTY,
    productId,
  });
};
export const decCartQty = productId => dispatch => {
  dispatch({
    type: types.DEC_CART_QTY,
    productId,
  });
};
export const checkoutCart = () => dispatch => {
  dispatch({
    type: types.CHECKOUT_CART,
  });
};
