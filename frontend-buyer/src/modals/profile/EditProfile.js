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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-scroll';
import { PROFILE_MODAL_CHANGED } from '../../redux/constants/navigation.constants';

import { MODAL_EDIT_PROFILE_OPENED } from '../../redux/constants/profile.constants';

const EditProfile = ({ data, id }) => {
  const { first_name, last_name, phone, region, village } =
    data.currentUser || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: PROFILE_MODAL_CHANGED,
      payload: MODAL_EDIT_PROFILE_OPENED,
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
      header={
        <ModalPageHeader
          right={
            <PanelHeaderButton onClick={() => onClick(null)}>
              <Icon24Dismiss />
            </PanelHeaderButton>
          }
        >
          Редактировать
        </ModalPageHeader>
      }
    >
      <Group>
        <FormLayout>
          <FormLayoutGroup mode="vertical">
            <FormItem top="Имя">
              <Input defaultValue={first_name} />
            </FormItem>
            <FormItem top="Фамилия">
              <Input defaultValue={last_name} />
            </FormItem>
            <FormItem top="Телефон">
              <Input defaultValue={phone} />
            </FormItem>
            <FormItem top="Регион">
              <Select
                placeholder="Регион"
                selectedValue={{ label: region, value: region }}
                options={[...Array.from({ length: 6 }, (v, i) => i)].map(
                  (i) => ({ label: i, value: i })
                )}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
            <FormItem top="Нас. пункт">
              <Select
                placeholder="Нас. пункт"
                selectedValue={{ label: village, value: village }}
                options={[...Array.from({ length: 6 }, (v, i) => i)].map(
                  (i) => ({ label: i, value: i })
                )}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
            {/* BUG: modal doesnt work when button is present */}
            {/* <Button size="l" mode="commerce">
              Сохранить
            </Button> */}
            <FormItem>
              <CellButton>Сохранить</CellButton>
            </FormItem>
          </FormLayoutGroup>
        </FormLayout>
      </Group>
    </ModalPage>
  );
};

export default EditProfile;
