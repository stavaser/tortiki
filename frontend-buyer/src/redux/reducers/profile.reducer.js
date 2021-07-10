import {
  LOGIN_REQUESTED,
  LOGOUT,
  MODAL_EDIT_PROFILE_OPENED,
  USER_INFO_REQUESTED,
} from '../constants/profile.constants';

const initialState = {
  user: {
    first_name: '',
    last_name: '',
    phone: '',
    region: '',
    village: '',
  },
  modal: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUESTED:
      console.log('LOGIN_REQUESTED', payload);
      localStorage.setItem('user', JSON.stringify(payload));
      return { ...state, user: payload };
    case USER_INFO_REQUESTED:
      return { ...state, user: payload };
    case LOGOUT:
      console.log('logging out');
      localStorage.removeItem('token', payload);
      localStorage.removeItem('user', payload);
      return { profile: { modal: LOGOUT } };
    case MODAL_EDIT_PROFILE_OPENED:
      return { ...state, modal: payload };
    default:
      return state;
  }
};

export default userReducer;
