import {
  DELIVERY_BOTH,
  DELIVERY_GENERAL_FILTER_SET,
  DELIVERY_LOCAL_FILTER_SET,
  FAVORITES_REQUESTED,
  FAVORITE_ADDED,
  PRODUCTS_ALL_REQUESTED,
  PRODUCTS_INFO_REQUESTED,
  PRODUCT_LIKE_CLICKED,
} from '../constants/products.constants';
import ProductsService from '../services/products.service';

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await ProductsService.getAll();
    dispatch({
      type: PRODUCTS_ALL_REQUESTED,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getLocalDelivery = () => async (dispatch) => {
  try {
    const res = await ProductsService.getLocalDelivery();
    dispatch({
      type: PRODUCTS_ALL_REQUESTED,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getGeneralDelivery = () => async (dispatch) => {
  try {
    const res = await ProductsService.getGeneralDelivery();
    dispatch({
      type: DELIVERY_GENERAL_FILTER_SET,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getDeliveryBoth = () => async (dispatch) => {
  try {
    const res = await ProductsService.getDeliveryBoth();
    dispatch({
      type: DELIVERY_BOTH,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getProductInfo = (id) => async (dispatch) => {
  try {
    const res = await ProductsService.getInfo(id);

    dispatch({
      type: PRODUCTS_INFO_REQUESTED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getAllFavorites = () => async (dispatch) => {
  try {
    const res = await ProductsService.getAllFavorites();

    dispatch({
      type: FAVORITES_REQUESTED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const onFavoriteClick =
  ({ liked, product_id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_LIKE_CLICKED,
        payload: liked,
      });
      if (liked) {
        await ProductsService.postFavorite({ product_id });
      } else {
        console.log('else', product_id);
        await ProductsService.deleteFavorite({ product_id });
      }
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
