import {
  LOTTERY_ALL_REQUESTED,
  LOTTERY_INFO_REQUESTED,
} from '../constants/lottery.constants';
import LotteryService from '../services/lottery.service';

export const getAllLotteries = () => async (dispatch) => {
  try {
    const res = await LotteryService.getAll();
    dispatch({
      type: LOTTERY_ALL_REQUESTED,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getLotteryInfo = (lottery_id) => async (dispatch) => {
  try {
    const res = await LotteryService.getInfo(lottery_id);
    dispatch({
      type: LOTTERY_INFO_REQUESTED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
