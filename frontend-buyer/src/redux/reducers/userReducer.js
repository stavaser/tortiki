import {
  LOGIN_REQUESTED,
  USER_INFO_REQUESTED,
} from '../constants/user.constants';

const initialState = [];

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUESTED:
      console.log('reudcer 1', payload);
      return [...state, payload];
    case USER_INFO_REQUESTED:
      console.log('reudcer 2', payload);
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default userReducer;
