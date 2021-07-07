import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './products.reducer';

export const rootReducer = combineReducers({
  users: userReducer,
  products: productsReducer,
});
