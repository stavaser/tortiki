import {
  LOGIN_REQUESTED,
  LOGOUT,
  USER_INFO_REQUESTED,
} from '../constants/profile.constants';
import UserService from '../services/profile.service';

export const userLogin = (phone, password) => async (dispatch) => {
  try {
    const res = await UserService.login({ phone, password });

    localStorage.setItem('token', `token ${res.data.auth_token}`);
    // const user_info = await UserService.getUser();
    dispatch({
      type: LOGIN_REQUESTED,
      payload: res.data.user,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await UserService.getUser();

    dispatch({
      type: USER_INFO_REQUESTED,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
