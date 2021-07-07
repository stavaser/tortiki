import {
  Button,
  FormItem,
  FormLayout,
  Group,
  Input,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { userLogin } from '../../redux/actions/user.actions';
import store from '../../redux/store';

const Login = ({ id, go }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    store.dispatch(userLogin(phone, password));
  };

  return (
    <Panel id={id}>
      <PanelHeader>Логин</PanelHeader>
      <Group>
        <FormLayout>
          <FormItem top="Номер телефона">
            <Input
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Введите номер телефона"
            />
          </FormItem>

          <FormItem top="Пароль">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button size="l" stretched onClick={(e) => submitForm(e)}>
              Вход
            </Button>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  );
};

export default Login;
