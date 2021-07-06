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
import * as to from '../navigation/auth';
import Login from '../panels/auth/Login';

const AuthView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.AUTH_LOGIN);

  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <Login id={to.AUTH_LOGIN} go={go} />
    </View>
  );
};
export default AuthView;
