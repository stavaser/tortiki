import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
} from '@vkontakte/vkui';

const Login = () => (
  <Panel>
    <PanelHeader left={<PanelHeaderBack />}>
      <h3 style={{ textAlign: 'center' }}>login</h3>
    </PanelHeader>
    <h3 style={{ textAlign: 'center' }}>Компонент {'<Login/>'}</h3>
  </Panel>
);
export default Login;
