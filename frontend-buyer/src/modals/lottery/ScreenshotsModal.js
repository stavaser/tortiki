import { Icon24Dismiss } from '@vkontakte/icons';
import { ModalPage, ModalPageHeader, PanelHeaderButton } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sc from '../../assets/sc.jpeg';
import { LOTTERY_MODAL_CHANGED } from '../../redux/constants/navigation.constants';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const ScreenshotsModal = () => {
  const dispatch = useDispatch();
  const changeModal = (modal) => {
    dispatch({
      type: LOTTERY_MODAL_CHANGED,
      payload: modal,
    });
  };

  return (
    <ModalPage
      id={MODAL_PAGE_SCREENSHOT}
      settlingHeight={100}
      header={
        <ModalPageHeader
          right={
            <PanelHeaderButton
              onClick={() => changeModal(MODAL_PAGE_PARTICIPANTS)}
            >
              <Icon24Dismiss />
            </PanelHeaderButton>
          }
        >
          Скриншот об оплате
        </ModalPageHeader>
      }
    >
      <img src={sc} style={{ width: '100%' }} />
    </ModalPage>
  );
};

export default ScreenshotsModal;
