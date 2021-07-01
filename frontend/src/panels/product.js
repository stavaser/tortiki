import React from 'react';
import ReactDOM from 'react-dom';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
} from '@vkontakte/vkui';

const Product = () => (
  <Panel>
    <PanelHeader left={<PanelHeaderBack />}>Подробнее</PanelHeader>
    <Group style={{ height: '1000px' }}>Подробнее</Group>
  </Panel>
);
export default Product;
