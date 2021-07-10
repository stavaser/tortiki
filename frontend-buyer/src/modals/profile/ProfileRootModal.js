import { ModalRoot } from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_MODAL_CHANGED } from '../../redux/constants/navigation.constants';
import { MODAL_EDIT_PROFILE_OPENED } from '../../redux/constants/profile.constants';
import EditProfile from './EditProfile';

const ProfileRootModal = ({ data }) => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.navigation.profile.modal);

  useEffect(() => {
    dispatch({ type: null });
  }, []);

  const closeModal = () => {
    dispatch({
      type: PROFILE_MODAL_CHANGED,
      payload: null,
    });
  };

  return (
    <ModalRoot activeModal={activeModal} onClose={() => closeModal()}>
      <EditProfile id={MODAL_EDIT_PROFILE_OPENED} data={{ data }} />
    </ModalRoot>
  );
};

export default ProfileRootModal;
