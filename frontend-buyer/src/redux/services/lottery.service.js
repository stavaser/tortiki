import http from '../helpers/apiCient';

class LotteryService {
  getAll() {
    return http.get(`/api/lottery/`);
  }
  getInfo(id) {
    return http.get(`/api/lottery/${id}`);
  }
}

export default new LotteryService();
