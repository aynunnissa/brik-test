import { ADD_TO_CART } from '../actions/type';

const initialState = {
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.total++;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
