import http from '../helpers/apiCient';

class UserService {
  login(data) {
    console.log('login clicked');
    return http.post(`/auth/token/login/`, data);
  }
}

export default new UserService();
