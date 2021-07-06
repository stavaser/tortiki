import { combineReducers } from 'redux';
import { user_reducer } from './user_reducer';
// import { autorsReducer } from './autorsReducer';
// import { currencyAccountsReducer } from './currencyAccountsReducer';

export const rootReducer = combineReducers({
  users: user_reducer,
  // autors: autorsReducer,
  // currencyAccounts: currencyAccountsReducer
});
