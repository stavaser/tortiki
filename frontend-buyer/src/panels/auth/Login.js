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
import { useDispatch } from 'react-redux';
import { PROFILE } from '../../navigation/epic';
import { userLogin } from '../../redux/actions/profile.actions';
import { VIEW_CHANGED } from '../../redux/constants/navigation.constants';
import store from '../../redux/store';

const Login = ({ id, go }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(userLogin(phone, password))
      .then(() => {
        dispatch({ type: VIEW_CHANGED, payload: PROFILE });
      })
      .catch((e) => console.log(e));
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
