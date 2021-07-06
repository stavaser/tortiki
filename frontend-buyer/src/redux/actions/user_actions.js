import * as _ from '../constants/user_constants';
import { user_service } from '../services/user_service';

export const user_actions = {
  login,
  logout,
};

function login(phone, password) {
  return (dispatch) => {
    dispatch(request({ phone }));

    user_service.login(phone, password).then(
      (user) => {
        dispatch(success(user));
        console.log('success', user);
        // history.push('/lol');
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
        console.log('error', error);
      }
    );
  };

  function request(user) {
    return { type: _.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: _.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: _.LOGIN_FAILURE, error };
  }
}

function logout() {
  user_service.logout();
  return { type: _.LOGOUT };
}

// function getAll() {
//   return (dispatch) => {
//     dispatch(request());

//     user_service.getAll().then(
//       (users) => dispatch(success(users)),
//       (error) => dispatch(failure(error))
//     );
//   };

//   function request() {
//     return { type: _.GETALL_REQUEST };
//   }
//   function success(users) {
//     return { type: _.GETALL_SUCCESS, users };
//   }
//   function failure(error) {
//     return { type: _.GETALL_FAILURE, error };
//   }
// }
