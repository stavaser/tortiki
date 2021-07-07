import {
  PRODUCTS_ALL_REQUESTED,
  PRODUCTS_INFO_REQUESTED,
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

export const getProductInfo = (id) => async (dispatch) => {
  try {
    const res = await ProductsService.getInfo(id);

    dispatch({
      type: PRODUCTS_INFO_REQUESTED,
      payload: res.data,
    });
    console.log('ACTION', res.data);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
