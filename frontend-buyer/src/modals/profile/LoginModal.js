import { Icon24Dismiss } from '@vkontakte/icons';
import { CellButton } from '@vkontakte/vkui';
import { FormItem, FormLayoutGroup, Input, Select } from '@vkontakte/vkui';
import { CustomSelectOption } from '@vkontakte/vkui';
import {
  FormLayout,
  Group,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
} from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-scroll';
import { userLogin } from '../../redux/actions/profile.actions';
import {
  PROFILE_LOGIN_MODAL,
  PROFILE_MODAL_CHANGED,
} from '../../redux/constants/navigation.constants';

import {
  LOGOUT,
  MODAL_EDIT_PROFILE_OPENED,
} from '../../redux/constants/profile.constants';

const LoginModal = ({ data, id }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(userLogin(phone, password));
  };
  useEffect(() => {
    dispatch({
      type: PROFILE_MODAL_CHANGED,
      payload: LOGOUT,
    });
  }, []);

  const onClick = (name) => {
    dispatch({
      type: PROFILE_MODAL_CHANGED,
      payload: name,
    });
  };
  return (
    <ModalPage
      id={id}
      settlingHeight={100}
      header={<ModalPageHeader>Логин</ModalPageHeader>}
      onClose={() => onClick(LOGOUT)}
    >
      <Group>
        <FormLayout>
          <FormLayoutGroup mode="vertical">
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

            <CellButton>Сохранить</CellButton>
          </FormLayoutGroup>
        </FormLayout>
      </Group>
    </ModalPage>
  );
};

export default LoginModal;
