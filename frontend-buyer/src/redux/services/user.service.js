import http from '../helpers/apiCient';

class UserService {
  login(data) {
    return http.post(`/auth/token/login/`, data);
  }
  getUser() {
    return http.get(`/auth/users/me/`);
  }
}

export default new UserService();
