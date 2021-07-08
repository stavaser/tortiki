import {
  FAVORITES_REQUESTED,
  FAVORITE_ADDED,
  PRODUCTS_ALL_REQUESTED,
  PRODUCTS_INFO_REQUESTED,
  PRODUCT_ID_SET,
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
    default:
      return state;
  }
};

export default productsReducer;
