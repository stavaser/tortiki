import { LOGIN_REQUEST } from '../constants/user.constants';

const initialState = [];

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return [...state, payload];

    default:
      return state;
  }
};

export default userReducer;
