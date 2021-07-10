import {
  COUNTER_OPENED,
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
  counter: {
    date_added: null,
    date_end: null,
  },
};

const lotteryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOTTERY_ALL_REQUESTED:
      return { ...state, list: payload };
    case LOTTERY_INFO_REQUESTED:
      return {
        ...state,
        info: payload,
        counter: {
          date_added: payload.date_added,
          date_end: payload.date_end,
        },
      };
    case LOTTERY_ID_SET:
      console.log(LOTTERY_ID_SET, payload);
      return { ...state, lottery_id: payload };
    case COUNTER_OPENED:
      console.log(COUNTER_OPENED, { payload });
      return { ...state, counter: { payload } };

    default:
      return state;
  }
};

export default lotteryReducer;
