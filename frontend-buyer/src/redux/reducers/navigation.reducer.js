import { AUCTION_MAIN } from '../../navigation/auction';
import { PRODUCTS } from '../../navigation/epic';
import { PROFILE_MAIN } from '../../navigation/profile';
import {
  LOTTERY_MODAL_CHANGED,
  LOTTERY_PANEL_CHANGED,
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
  lottery: {
    panel: AUCTION_MAIN,
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

    case LOTTERY_PANEL_CHANGED:
      console.log('to (modal)', payload);
      return { ...state, lottery: { ...state.lottery, panel: payload } };
    case LOTTERY_MODAL_CHANGED:
      console.log('to (modal)', payload);
      return { ...state, lottery: { ...state.lottery, modal: payload } };

    case VIEW_CHANGED:
      console.log('to (view)', payload);
      return { ...state, view: payload };

    default:
      return state;
  }
};

export default navigationReducer;
