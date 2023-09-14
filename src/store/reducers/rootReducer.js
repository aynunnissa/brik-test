import { combineReducers } from 'redux';
import cartReducer from './cart';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
