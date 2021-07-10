import { PRODUCTS } from '../../navigation/epic';
import { PROFILE_MAIN } from '../../navigation/profile';
import {
  PROFILE_LOGOUT_REQUEST,
  PROFILE_MODAL_CHANGED,
  PROFILE_PANEL_CHANGED,
  VIEW_CHANGED,
} from '../constants/navigation.constants';

const initialState = {
  profile: {
    panel: PROFILE_MAIN,
    modal: null,
  },
  view: PRODUCTS,
};

const navigationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_PANEL_CHANGED:
      console.log('to', payload);
      return { ...state, profile: { ...state.profile, panel: payload } };
    case PROFILE_MODAL_CHANGED:
      console.log('to (modal)', payload);
      return { ...state, profile: { ...state.profile, modal: payload } };
    case VIEW_CHANGED:
      console.log('to (view)', payload);
      return { ...state, view: payload };

    default:
      return state;
  }
};

export default navigationReducer;
