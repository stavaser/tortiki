// import config from 'config';
import { authHeader } from '../helpers/authHeader';
import axios from 'axios';
const base = 'http://localhost:8000';
export const user_service = {
  login,
  logout,
};

function login(phone, password) {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password }),
  };
  return (
    axios
      .post('http://127.0.0.1:8000/auth/token/login/', requestOptions)
      // .then(handleResponse)
      .then(({ user }) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        // dispatch(setArticleDetails(data));
      })
  );

  // return fetch(`${base}/users/`, requestOptions)
  //   .then(handleResponse)
  //   .then((user) => {
  //     // store user details and jwt token in local storage to keep user logged in between page refreshes
  //     localStorage.setItem('user', JSON.stringify(user));

  //     return user;
  //   });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        console.log('fail');
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
