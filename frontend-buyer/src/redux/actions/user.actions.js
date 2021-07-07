import { LOGIN_REQUEST } from '../constants/user.constants';

import UserService from '../services/user.service';

const userLogin = (phone, password) => async (dispatch) => {
  console.log('PHONE', phone);
  try {
    const res = await UserService.login({ phone, password });

    dispatch({
      type: LOGIN_REQUEST,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default userLogin;
