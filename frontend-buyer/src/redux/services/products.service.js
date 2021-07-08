import http from '../helpers/apiCient';

class ProductsService {
  getAll() {
    return http.get(`/api/products/`);
  }
  getInfo(id) {
    return http.get(`/api/products/?product_id=${id}`);
  }
  getAllFavorites() {
    return http.get(`/api/products/favorites/`);
  }
  postFavorite(request) {
    return http.post(`/api/products/favorites/`, request);
  }
  deleteFavorite(request) {
    return http.delete(`/api/products/favorites/`, { data: request });
  }
}

export default new ProductsService();
