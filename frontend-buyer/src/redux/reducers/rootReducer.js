import { combineReducers } from 'redux';
import userReducer from './profile.reducer';
import productsReducer from './products.reducer';
import lotteryReducer from './lottery.reducer';

export const rootReducer = combineReducers({
  profile: userReducer,
  products: productsReducer,
  lottery: lotteryReducer,
});
