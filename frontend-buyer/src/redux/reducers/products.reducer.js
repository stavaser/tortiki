import {
  DELIVERY_GENERAL_FILTER_SET,
  DELIVERY_LOCAL_FILTER_SET,
  FAVORITES_REQUESTED,
  FAVORITE_ADDED,
  FILTER_APPLIED,
  PRODUCTS_ALL_REQUESTED,
  PRODUCTS_INFO_REQUESTED,
  PRODUCT_ID_SET,
  PRODUCT_INFO_MODAL_OPENED,
  PRODUCT_LIKE_CLICKED,
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
  favorites: {},
  filters: {
    count: 0,
  },
  modal: null,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ALL_REQUESTED:
      return { ...state, list: payload };
    case PRODUCTS_INFO_REQUESTED:
      console.log(PRODUCTS_INFO_REQUESTED, payload);
      return { ...state, info: payload[0].product };
    case PRODUCT_ID_SET:
      return { ...state, product_id: payload };
    case PRODUCT_LIKE_CLICKED:
      return {
        ...state,
        info: {
          ...state.info,
          liked: payload,
        },
      };
    case FAVORITES_REQUESTED:
      console.log(FAVORITES_REQUESTED, payload);
      return { ...state, favorites: payload };
    // case DELIVERY_LOCAL_FILTER_SET:
    //   return { ...state, filters: { ...state.filters, payload } };
    case DELIVERY_GENERAL_FILTER_SET:
      return { ...state, filters: { ...state.filters, payload } };
    case FILTER_APPLIED:
      return { ...state, filters: { ...state.filters, count: payload } };
    case PRODUCT_INFO_MODAL_OPENED:
      console.log({
        ...state,
        modal: payload.modal,
        product_id: payload.product_id,
        info: payload.info,
      });
      return {
        ...state,
        modal: payload.modal,
        product_id: payload.product_id,
        info: { ...payload.info },
      };
    default:
      return state;
  }
};

export default productsReducer;
