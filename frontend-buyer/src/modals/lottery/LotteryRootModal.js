import { ModalRoot } from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOTTERY_MODAL_CHANGED } from '../../redux/constants/navigation.constants';
import ParticipantsModal from './ParticipantsModal';
import ScreenshotsModal from './ScreenshotsModal';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const LotteryRootModal = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.navigation.lottery.modal);

  useEffect(() => {
    dispatch({ type: null });
  }, []);

  const closeModal = () => {
    dispatch({
      type: LOTTERY_MODAL_CHANGED,
      payload: null,
    });
  };

  return (
    <ModalRoot activeModal={activeModal} onClose={() => closeModal()}>
      <ParticipantsModal id={MODAL_PAGE_PARTICIPANTS} />
      <ScreenshotsModal id={MODAL_PAGE_SCREENSHOT} />
    </ModalRoot>
  );
};

export default LotteryRootModal;
