import { LOGIN, LOGOUT } from '../actions/type';

const initialState = {
  user: {
    name: 'Aynun', // dummy name
    email: '',
  },
  token: '', // let's pretend we have token here
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.user.email = action.user.email;
      state.isLoggedIn = true;

      return {
        ...state,
      };
    case LOGOUT:
      state.user.email = '';
      state.isLoggedIn = false;
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default authReducer;
