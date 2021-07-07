import {
  PRODUCTS_ALL_REQUESTED,
  PRODUCTS_INFO_REQUESTED,
  PRODUCT_ID_SET,
} from '../constants/products.constants';

const initialState = {
  list: {
    id: '',
    title: '',
    price: '',
    weight: '',
  },
  info: {
    id: '',
    title: '',
    price: '',
    weight: '',
    description: '',
  },
  product_id: null,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ALL_REQUESTED:
      return { ...state, list: payload };
    case PRODUCTS_INFO_REQUESTED:
      console.log('info', payload);
      return { ...state, info: payload };
    case PRODUCT_ID_SET:
      console.log('payload', payload);
      return { ...state, product_id: payload };
    default:
      return state;
  }
};

export default productsReducer;
