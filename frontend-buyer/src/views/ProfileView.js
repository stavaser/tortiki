import { View } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as to from '../navigation/profile';
import ProfileMain from '../panels/profile/ProfileMain';
import { getUser } from '../redux/actions/user.actions';

const ProfileView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.PROFILE_MAIN);
  const currentUser = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log('PROFILE VIEW', currentUser);
  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <ProfileMain id={to.PROFILE_MAIN} go={go} data={{ currentUser }} />
    </View>
  );
};
export default ProfileView;
