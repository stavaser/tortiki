import {
  LOGIN_REQUESTED,
  USER_INFO_REQUESTED,
} from '../constants/user.constants';
import UserService from '../services/user.service';

export const userLogin = (phone, password) => async (dispatch) => {
  try {
    const res = await UserService.login({ phone, password });

    dispatch({
      type: LOGIN_REQUESTED,
      payload: res.data,
    });
    console.log(res.data);
    localStorage.setItem('token', res.data.auth_token);
    console.log(localStorage.getItem('token'));

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
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
