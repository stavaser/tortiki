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
import ProductsMain from '../panels/products/productsMain';
import ProductsDetail from '../panels/products/productsDetail';

const TestView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('products_main');

  const go = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View activePanel={activePanel}>
      <ProductsMain id="products_main" go={go} className="App__panel" />
      <ProductsDetail id="products_detail" go={go} className="App__panel" />
    </View>
  );
};
export default TestView;
