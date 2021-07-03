import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
  Div,
  Button,
  FormItem,
  SliderSwitch,
  Select,
  CustomSelectOption,
  Input,
  Title,
  Link,
} from '@vkontakte/vkui';
import { VKCOM, IOS, platform } from '@vkontakte/vkui';
import { Icon28UserOutline, Icon28EditOutline } from '@vkontakte/icons';
import ProfileMain from '../panels/profile/ProfileMain';
import * as to from '../navigation/profile';

const ProfileView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.PROFILE_MAIN);

  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <ProfileMain id={to.PROFILE_MAIN} go={go} />
    </View>
  );
};
export default ProfileView;
