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

const ProfileView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('profile_main');

  const go = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <ProfileMain id="profile_main" go={go} />
    </View>
  );
};
export default ProfileView;
