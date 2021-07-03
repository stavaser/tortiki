import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderEdit,
  Header,
  Group,
  Button,
  SimpleCell,
  PanelHeaderBack,
  PanelHeaderButton,
  Div,
  CardGrid,
  Card,
  CardScroll,
  ContentCard,
  Gallery,
  InfoRow,
  Title,
  CellButton,
  FormItem,
  Input,
  SliderSwitch,
  CustomSelectOption,
  Select,
  Textarea,
  FormLayoutGroup,
  Switch,
  Checkbox,
  Cell,
  File,
  HorizontalCell,
  HorizontalScroll,
  Avatar,
} from '@vkontakte/vkui';
import {
  Icon24Add,
  Icon24Camera,
  Icon28SettingsOutline,
  Icon28ArchiveOutline,
  Icon28EditOutline,
  Icon28UnarchiveOutline,
} from '@vkontakte/icons';

import { VKCOM, IOS, platform } from '@vkontakte/vkui';

const ProductsMain = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Продукты</PanelHeader>
    <Group>
      <CellButton
        centered
        before={<Icon24Add />}
        onClick={go}
        data-to="add_product"
      >
        Добавить продукт
      </CellButton>
    </Group>
    <Group mode="plain" header={<Header>Ваши продукты (3)</Header>}>
      <CardGrid size="m">
        <ContentCard
          id="0"
          onClick={go}
          data-to="products_detail"
          image={cake}
          subtitle="Торт 'красный бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
        <ContentCard
          id="1"
          onClick={go}
          data-to="products_detail"
          image={cake}
          subtitle="Торт 'красный бархат'й бархат'й бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
        <ContentCard
          id="2"
          onClick={go}
          data-to="products_detail"
          image={cake}
          subtitle="Торт 'красный бархат'й бархат'й бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
      </CardGrid>
    </Group>
    <Group mode="plain" header={<Header>Архив (1)</Header>}>
      <CardGrid size="m">
        <ContentCard
          onClick={go}
          data-to="products_detail"
          image={cake}
          subtitle="Торт 'красный бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
      </CardGrid>
    </Group>
  </Panel>
);

ProductsMain.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  // fetchedUser: PropTypes.shape({
  // 	photo_200: PropTypes.string,
  // 	first_name: PropTypes.string,
  // 	last_name: PropTypes.string,
  // 	city: PropTypes.shape({
  // 		title: PropTypes.string,
  // 	}),
  // }),
};
export default ProductsMain;
