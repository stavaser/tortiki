import { Icon24Dismiss } from '@vkontakte/icons';
import {
  Avatar,
  Gradient,
  Group,
  Header,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  RichCell,
  Title,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { LOTTERY_MODAL_CHANGED } from '../../redux/constants/navigation.constants';
import cake from '../../assets/cake.jpeg';
import { useDispatch } from 'react-redux';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const ParticipantsModal = ({ id }) => {
  const participants = [
    { id: 0, name: 'valeria', number: 1, time: 'Вчера в 20:30' },
    { id: 1, name: 'elena', number: 2, time: 'Вчера в 15:20' },
  ];
  const dispatch = useDispatch();
  const changeModal = (modal) => {
    dispatch({
      type: LOTTERY_MODAL_CHANGED,
      payload: modal,
    });
  };

  return (
    <ModalPage
      id={id}
      settlingHeight={100}
      style={{ height: '100%' }}
      header={
        <ModalPageHeader
          right={
            <PanelHeaderButton onClick={() => changeModal(null)}>
              <Icon24Dismiss />
            </PanelHeaderButton>
          }
        >
          Участники
        </ModalPageHeader>
      }
    >
      <Gradient
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 32,
        }}
      >
        <Avatar size={96} src={cake} />
        <Title
          style={{ marginBottom: 8, marginTop: 20 }}
          level="2"
          weight="medium"
        >
          Торт 'красный бархат'
        </Title>
      </Gradient>
      <Group
        header={
          <Header mode="secondary" indicator={participants.length}>
            Итого
          </Header>
        }
      >
        {participants.map((user) => {
          return (
            <RichCell
              onClick={() => changeModal(MODAL_PAGE_SCREENSHOT)}
              multiline
              before={<Avatar size={72} src={null} />}
              text={`Билет № ${user.number}`}
              caption={user.time}
              after="+ 100 ₽"
            >
              {user.name}
            </RichCell>
          );
        })}
      </Group>
    </ModalPage>
  );
};

export default ParticipantsModal;
