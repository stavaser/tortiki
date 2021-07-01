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

const Catalog = () => (
  <Panel>
    <PanelHeader left={<PanelHeaderBack />}>Каталог</PanelHeader>
    <Group style={{ height: '1000px' }}>Каталог</Group>
  </Panel>
);
export default Catalog;
