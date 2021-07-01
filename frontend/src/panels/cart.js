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
} from '@vkontakte/vkui';

const Cart = () => (
  <Panel>
    <PanelHeader>Корзина</PanelHeader>
    <Group style={{ height: '1000px' }}></Group>
  </Panel>
);
export default Cart;
