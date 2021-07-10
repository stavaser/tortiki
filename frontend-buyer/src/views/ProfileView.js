import { View } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as to from '../navigation/profile';
import ProfileMain from '../panels/profile/ProfileMain';
import { getUser } from '../redux/actions/profile.actions';
import EditProfile from '../modals/profile/EditProfile';
import {
  PROFILE_MAIN,
  PROFILE_PANEL_CHANGED,
} from '../redux/constants/navigation.constants';
import ProfileRootModal from '../modals/profile/ProfileRootModal';

const ProfileView = ({ id }) => {
  // const [activePanel, setActivePanel] = useState(to.PROFILE_MAIN);
  const activePanel = useSelector((state) => state.navigation.profile.panel);

  const currentUser = JSON.parse(localStorage.getItem('user')); //useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PROFILE_PANEL_CHANGED, payload: to.PROFILE_MAIN });
  }, []);

  console.log('which panel:', activePanel);

  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    if (target || currentTarget) {
      // setActivePanel(target || currentTarget);
    }
  };

  return (
    <View
      id={id}
      activePanel={activePanel}
      modal={<ProfileRootModal data={{ currentUser }} />}
    >
      <ProfileMain id={to.PROFILE_MAIN} go={go} data={{ currentUser }} />
    </View>
  );
};
export default ProfileView;
