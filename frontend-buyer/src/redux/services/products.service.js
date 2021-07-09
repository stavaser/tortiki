import http from '../helpers/apiCient';

class ProductsService {
  getAll() {
    return http.get(`/api/products/`);
  }
  getInfo(id) {
    return http.get(`/api/products/${id}`);
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
  getLocalDelivery() {
    return http.get(`/api/products/?delivery_local=${true}`);
  }
  getGeneralDelivery() {
    return http.get(`/api/products/?delivery_general=${true}`);
  }
  getDeliveryBoth() {
    return http.get(
      `/api/products/?delivery_general=${true}&delivery_local=${true}`
    );
  }
}

export default new ProductsService();
