import { Icon24Dismiss } from '@vkontakte/icons';
import { FormItem, FormLayoutGroup, Input, Select } from '@vkontakte/vkui';
import { CustomSelectOption } from '@vkontakte/vkui';
import {
  FormLayout,
  Group,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
} from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROFILE_MODAL_CHANGED,
  PROFILE_LOGIN_MODAL,
} from '../../redux/constants/navigation.constants';

import {
  LOGOUT,
  MODAL_EDIT_PROFILE_OPENED,
} from '../../redux/constants/profile.constants';
import EditProfile from './EditProfile';
import LoginModal from './LoginModal';

const ProfileRootModal = ({ data }) => {
  const dispatch = useDispatch();

  const activeModal = useSelector((state) => state.navigation.profile.modal);

  useEffect(() => {
    dispatch({ type: null });
  }, []);

  console.log('modalRoot', activeModal);

  const onClick = (name) => {
    dispatch({
      type: PROFILE_MODAL_CHANGED,
      payload: name,
    });
  };
  console.log('activeModal', activeModal);
  return (
    <ModalRoot activeModal={activeModal} onClose={() => onClick(LOGOUT)}>
      <EditProfile id={MODAL_EDIT_PROFILE_OPENED} data={{ data }} />
      <LoginModal id={LOGOUT} />
    </ModalRoot>
  );
};

export default ProfileRootModal;
