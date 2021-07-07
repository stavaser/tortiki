import {
  Button,
  Card,
  CardGrid,
  Div,
  File,
  Group,
  ModalCard,
  ModalRoot,
  Panel,
  PanelHeader,
  SimpleCell,
  Header,
  Link,
  Banner,
  Avatar,
} from '@vkontakte/vkui';
import {
  Icon24Add,
  Icon28UserOutline,
  Icon28EditOutline,
} from '@vkontakte/icons';
import React, { useState } from 'react';
import pfp from '../../assets/pfp.jpeg';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import * as to from '../../navigation/profile';

const MODAL_CARD_PHOTO_PREVIEW = 'photo_preview';
const ProfileMain = ({ id, go, data }) => {
  const { first_name, last_name, phone, region, village } = data.currentUser;
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Banner
        before={
          <Avatar
            size={96}
            mode="image"
            src={pfp}
            style={{ objectFit: 'cover' }}
          />
        }
        header={first_name + ' ' + last_name}
        subheader={phone}
        actions={<Button>Настройки</Button>}
      />

      <Group>
        <Header mode="secondary">Меню</Header>
        <SimpleCell expandable>Мои продукты</SimpleCell>
        <SimpleCell expandable>Мои розыгрыши</SimpleCell>
        <SimpleCell expandable>Моя фото-выставка</SimpleCell>
      </Group>
    </Panel>
  );
};
export default ProfileMain;
