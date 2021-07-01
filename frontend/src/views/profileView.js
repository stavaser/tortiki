import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
  Div,
  Button,
  FormItem,
  SliderSwitch,
  Select,
  CustomSelectOption,
  Input,
} from '@vkontakte/vkui';

const regions = ['усть алданский'];
const towns = ['борогонцы'];

const ProfileView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Профиль</PanelHeader>
        <Group>
          <Div>
            <Button
              stretched
              mode="commerce"
              size="m"
              onClick={() => setActivePanel('login')}
            >
              Вход
            </Button>
          </Div>
        </Group>
      </Panel>
      <Panel id="login">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
        >
          Вход
        </PanelHeader>
        <Group>
          <Group>
            <FormItem top="Мобильный телефон">
              <Input placeholder="+7 12 344 15 48" />
            </FormItem>
            <FormItem top="ФИО">
              <Input placeholder="ФИО" />
            </FormItem>
          </Group>
          <Group>
            <FormItem top="Регион">
              <Select
                placeholder="Не выбран"
                options={regions.map((item) => ({
                  label: item,
                  value: item,
                }))}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
            <FormItem top="Населенный пункт">
              <Select
                placeholder="Не выбран"
                options={towns.map((item) => ({
                  label: item,
                  value: item,
                }))}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
          </Group>
          <Group>
            <FormItem top="Роль">
              <SliderSwitch
                options={[
                  {
                    name: 'Покупатель',
                    value: 'buyer',
                  },
                  {
                    name: 'Продавец',
                    value: 'seller',
                  },
                ]}
              />
            </FormItem>
          </Group>
          <Div>
            <Button size="l" stretched mode="commerce">
              Зарегистрироваться
            </Button>
          </Div>
        </Group>
      </Panel>
    </View>
  );
};
export default ProfileView;
