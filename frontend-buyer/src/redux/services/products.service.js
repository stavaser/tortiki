import http from '../helpers/apiCient';

class ProductsService {
  getAll() {
    return http.get(`/api/products/`);
  }
  getInfo(id) {
    return http.get(`/api/products/?product_id=${id}`);
  }
}

export default new ProductsService();
