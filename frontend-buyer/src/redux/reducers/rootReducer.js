import { combineReducers } from 'redux';
import userReducer from './profile.reducer';
import productsReducer from './products.reducer';

export const rootReducer = combineReducers({
  profile: userReducer,
  products: productsReducer,
});
