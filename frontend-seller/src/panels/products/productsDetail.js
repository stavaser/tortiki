import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  Title,
  Link,
  InfoRow,
  Gallery,
} from '@vkontakte/vkui';
import { VKCOM, IOS, platform } from '@vkontakte/vkui';
import {
  Icon28UserOutline,
  Icon28EditOutline,
  Icon28ArchiveOutline,
} from '@vkontakte/icons';
import cake from '../../assets/cake.jpeg';
const ProductsDetail = ({ id, go, className }) => (
  <Panel id={id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={go} data-to="products_main" />}
      // right={
      //   <PanelHeaderButton>
      //     <Icon28SettingsOutline />
      //   </PanelHeaderButton>
      // }
    >
      Подробнее
    </PanelHeader>
    <Group>
      <Gallery
        slideWidth="90%"
        style={{ height: 150 }}
        bullets="dark"
        showArrows
      >
        <img src={cake} style={{ objectFit: 'cover' }} />
        <div style={{ backgroundColor: 'var(--destructive)' }} />
        <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
        <div style={{ backgroundColor: 'var(--accent)' }} />
      </Gallery>

      <Header
        multiline
        level="1"
        weight="semibold"
        style={{ marginTop: 16 }}
        aside={
          <Title level="1" weight="bold">
            1200 руб
          </Title>
        }
        subtitle={
          <Title level="3" weight="regular">
            1200 гр
          </Title>
        }
      >
        <Title level="1" weight="semibold">
          Торт 'красный бархат'
        </Title>
      </Header>
    </Group>
    <Group>
      <Header mode="secondary">Информация о продукте</Header>
      <SimpleCell multiline>
        <InfoRow header="Описание">
          Домашний рецепт любимого торта. Три слоя бисквитных коржей: первый — с
          какао, второй – с орехами, третий – с маком. Крем с вареной сгущенкой
          и сливочным маслом. Состав: мука в/с, яйцо, масло сливочное, молоко
          сгущенное вареное, сметана, сахар, какао, мак пищевой, орех грецкий,
          ликер Бэйлиз.
        </InfoRow>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Состав">мука?</InfoRow>
      </SimpleCell>
    </Group>
    <Group>
      <SimpleCell>
        <InfoRow header="Доставка на дом:">150 руб</InfoRow>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Возможна доставка в другой поселок:">Да</InfoRow>
      </SimpleCell>
    </Group>
    {/* TODO: doesnt shrink on smaller screens */}
    <Div style={{ display: 'flex' }}>
      <Button
        size="l"
        stretched
        style={{ marginRight: 8 }}
        before={<Icon28ArchiveOutline />}
      >
        Архивировать
      </Button>
      <Button
        size="l"
        stretched
        mode="secondary"
        before={<Icon28EditOutline />}
        onClick={go}
        data-to="edit_product"
      >
        Редактировать
      </Button>
    </Div>
  </Panel>
);

ProductsDetail.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default ProductsDetail;
