import { Icon28EditOutline } from '@vkontakte/icons';
import {
  Avatar,
  Banner,
  Button,
  Group,
  Header,
  Panel,
  PanelHeader,
  RichCell,
  SimpleCell,
  Card,
  Div,
  Title,
  Spacing,
  CellButton,
  IconButton,
} from '@vkontakte/vkui';
import React from 'react';
import pfp from '../../assets/pfp.jpeg';
import { MODAL_EDIT_PROFILE_OPENED } from '../../redux/constants/profile.constants';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/profile.actions';

const MODAL_CARD_PHOTO_PREVIEW = 'photo_preview';
const ProfileMain = ({ id, go, data }) => {
  const dispatch = useDispatch();

  const { first_name, last_name, phone, region, village } =
    data.currentUser || [];

  const openModal = (name) => {
    dispatch({
      type: MODAL_EDIT_PROFILE_OPENED,
      payload: name,
    });
  };
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Div>
        <Card mode="shadow">
          <RichCell
            disabled
            multiline
            text={phone}
            caption={region + ', ' + village}
            after={
              <Icon28EditOutline
                onClick={() => openModal(MODAL_EDIT_PROFILE_OPENED)}
              />
            }
          >
            <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>
              {first_name} {last_name}
            </Title>
          </RichCell>
        </Card>
        <Spacing size={20} />
        <Card mode="shadow">
          <SimpleCell expandable>
            <Spacing />
            <Title level="3" weight="semibold">
              История розыгрышей
            </Title>
            <Spacing />
          </SimpleCell>
        </Card>
        <Spacing />
        <Card mode="shadow">
          <SimpleCell expandable>
            <Spacing />
            <Title level="3" weight="semibold">
              Бонусный счет
            </Title>
            <Spacing />
          </SimpleCell>
        </Card>
        <Spacing />
        <Card mode="shadow">
          <SimpleCell expandable>
            <Spacing />
            <Title level="3" weight="semibold">
              Поделитсья
            </Title>
            <Spacing />
          </SimpleCell>
        </Card>
        <CellButton
          mode="danger"
          centered
          style={{ position: 'fixed', bottom: '50px' }}
          onClick={() => dispatch(userLogout())}
        >
          Выйти
        </CellButton>
      </Div>
    </Panel>
  );
};
export default ProfileMain;
