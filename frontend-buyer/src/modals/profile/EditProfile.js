import { Icon24Dismiss } from '@vkontakte/icons';
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

import { MODAL_EDIT_PROFILE_OPENED } from '../../redux/constants/profile.constants';

const EditProfile = ({ data }) => {
  const { first_name, last_name, phone, region, village } =
    data.currentUser || [];

  const dispatch = useDispatch();

  const activeModal = useSelector((state) => state.profile.modal);
  console.log(activeModal);

  useEffect(() => {
    dispatch({
      type: MODAL_EDIT_PROFILE_OPENED,
    });
  }, []);

  const onClick = (name) => {
    dispatch({
      type: MODAL_EDIT_PROFILE_OPENED,
      payload: name,
    });
  };
  console.log('activeModal', activeModal);
  return (
    <ModalRoot activeModal={activeModal} onClose={() => onClick(null)}>
      <ModalPage
        id={MODAL_EDIT_PROFILE_OPENED}
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
            </FormLayoutGroup>
          </FormLayout>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
};

export default EditProfile;
