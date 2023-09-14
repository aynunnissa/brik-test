import {
  ADD_TO_CART,
  CHECKOUT_CART,
  DEC_CART_QTY,
  INC_CART_QTY,
  RESET_CART,
} from '../actions/type';

const initialState = {
  product: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // this action used to reset cart when user logout
    case RESET_CART:
      return { ...state, product: [], totalQty: 0, totalPrice: 0 };
    case CHECKOUT_CART:
      return { ...state, product: [], totalQty: 0, totalPrice: 0 };
    case ADD_TO_CART:
      const productObj = { ...action.product, qty: 1 };
      state.product.push(productObj);
      state.totalQty++;
      state.totalPrice += productObj.price;
      return {
        ...state,
      };
    case INC_CART_QTY:
      const incProductId = action.productId;
      const incCart = state.product.reduce((productList, product) => {
        if (product.id === incProductId) {
          productList.push({
            ...product,
            qty: product.qty + 1,
          });
          state.totalPrice += product.price;
          state.totalQty += 1;
        } else {
          productList.push(product);
        }
        return productList;
      }, []);
      return { ...state, product: incCart };
    case DEC_CART_QTY:
      const decProductId = action.productId;
      const decCart = state.product.reduce((productList, product) => {
        if (product.id === decProductId && product.qty > 1) {
          productList.push({
            ...product,
            qty: product.qty - 1,
          });
          state.totalPrice -= product.price;
          state.totalQty -= 1;
        } else if (product.id === decProductId && product.qty === 1) {
          state.totalPrice -= product.price;
          state.totalQty -= 1;
        } else {
          productList.push(product);
        }
        return productList;
      }, []);
      return { ...state, product: decCart };
    default:
      return state;
  }
};

export default cartReducer;
