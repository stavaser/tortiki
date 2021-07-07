export function authHeader() {
  // return authorization header with jwt token
  let user = localStorage.getItem('user');

  if (user && user.token) {
    return { Authorization: 'token ' + user.token };
  } else {
    return {};
  }
}
