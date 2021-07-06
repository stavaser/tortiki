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
  Input,
  FormItem,
  FormLayoutGroup,
  FormLayout,
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
import { connect, useDispatch } from 'react-redux';

import { user_actions } from '../../redux/actions/user_actions';

const MODAL_CARD_PHOTO_PREVIEW = 'photo_preview';
const Login = ({ id, go }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    console.log(phone, password);

    dispatch(
      user_actions.login({
        phone,
        password,
      })
    );
    // go(e);
  };
  // const submitForm = (e, phone, password) => {
  //   e.preventDefault();
  //   console.log(phone, password);
  //   if (phone && password) {
  //   }
  // };

  return (
    <Panel id={id}>
      <PanelHeader>Логин</PanelHeader>
      <Group>
        <FormLayout onSubmit={(e) => submitForm(e)}>
          <FormItem
            top="Номер телефона"
            // status={email ? 'valid' : 'error'}
            // bottom={
            //   email
            //     ? 'Электронная почта введена верно!'
            //     : 'Пожалуйста, введите электронную почту'
            // }
          >
            <Input
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.phone)}
              placeholder="Введите номер телефона"
            />
          </FormItem>

          <FormItem top="Пароль">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.password)}
            />
          </FormItem>
          <FormItem>
            <Button size="l" stretched>
              Вход
            </Button>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  );
};
export default Login;
