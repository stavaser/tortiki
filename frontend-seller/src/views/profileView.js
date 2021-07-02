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
const regions = ['усть алданский'];
const towns = ['борогонцы'];

const ProfileView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Профиль</PanelHeader>

        <Header
          mode="primary"
          aside={
            <Link>
              <Icon28EditOutline />
            </Link>
          }
          subtitle="89841138757"
        >
          Имя Фамилия
        </Header>

        <Group>
          <Header mode="secondary">Меню</Header>
          <SimpleCell
            onClick={() => setActivePanel('test')}
            expandable
            before={<Icon28UserOutline />}
          >
            Мои продукты
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('test')}
            expandable
            before={<Icon28UserOutline />}
          >
            Мои розыгрыши
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('test')}
            expandable
            before={<Icon28UserOutline />}
          >
            Моя фото-выставка
          </SimpleCell>
        </Group>
      </Panel>
      <Panel id="test">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
        >
          Розыгрыш
        </PanelHeader>
      </Panel>
    </View>
  );
};
export default ProfileView;
