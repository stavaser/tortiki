import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
  Div,
  Button,
} from '@vkontakte/vkui';

const Profile = () => (
  <Panel>
    <PanelHeader>Профиль</PanelHeader>
    <Group>
      <Div>
        <Button stretched mode="commerce" size="m">
          Вход
        </Button>
      </Div>
    </Group>
  </Panel>
);
export default Profile;
