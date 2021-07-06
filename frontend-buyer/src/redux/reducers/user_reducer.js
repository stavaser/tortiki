import * as _ from '../constants/user_constants';

export function user_reducer(state = {}, action) {
  switch (action.type) {
    // case _.GETALL_REQUEST:
    //   return {
    //     loading: true,
    //   };
    // case _.GETALL_SUCCESS:
    //   return {
    //     items: action.users,
    //   };
    // case _.GETALL_FAILURE:
    //   return {
    //     error: action.error,
    //   };
    default:
      return state;
  }
}
