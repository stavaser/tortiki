import {
  LOTTERY_ALL_REQUESTED,
  LOTTERY_ID_SET,
  LOTTERY_INFO_REQUESTED,
} from '../constants/lottery.constants';

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

const lotteryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOTTERY_ALL_REQUESTED:
      return { ...state, list: payload };
    case LOTTERY_INFO_REQUESTED:
      console.log(LOTTERY_INFO_REQUESTED, payload);
      return { ...state, info: payload };
    case LOTTERY_ID_SET:
      console.log(LOTTERY_ID_SET, payload);
      return { ...state, lottery_id: payload };

    default:
      return state;
  }
};

export default lotteryReducer;
