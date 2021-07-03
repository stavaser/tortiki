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
const ProfileMain = ({ id, go }) => {
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
        header="Имя Фамилия"
        subheader={
          89841138757
          //   <div
          //     style={{
          //       display: 'flex',
          //       //   width: '100px',
          //       //   justifyContent: 'space-between',
          //     }}
          //   >
          //     <Icon16StarCircleFillYellow />
          //     <Icon16StarCircleFillYellow />
          //     <Icon16StarCircleFillYellow />
          //     <Icon16StarCircleFillYellow />
          //     <Icon16StarCircleFillYellow />
          //     <span style={{ marginLeft: '5px' }}>(12)</span>
          //   </div>
        }
        actions={<Button>Настройки</Button>}
      />

      <Group>
        <Header mode="secondary">Меню</Header>
        <SimpleCell expandable before={<Icon28UserOutline />}>
          Мои продукты
        </SimpleCell>
        <SimpleCell expandable before={<Icon28UserOutline />}>
          Мои розыгрыши
        </SimpleCell>
        <SimpleCell expandable before={<Icon28UserOutline />}>
          Моя фото-выставка
        </SimpleCell>
      </Group>
    </Panel>
  );
};
export default ProfileMain;
