import { Icon28UserOutline } from '@vkontakte/icons';
import { Icon28DeleteOutline, Icon28EditOutline } from '@vkontakte/icons';
import {
  Avatar,
  Group,
  Panel,
  PanelHeader,
  RichCell,
  SimpleCell,
  Spacing,
} from '@vkontakte/vkui';
import { Button, Div, ModalCard, ModalRoot, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import * as to from '../../navigation/favorites';
import { PRODUCTS_DETAIL } from '../../navigation/products';
import cake from '../../assets/cake.jpeg';
import './style.css';

const FavoritesMain = ({ id, go }) => {
  const truncate = (text, max) =>
    text.length > 5 ? `${text.substring(0, max)}...` : text;

  return (
    <Panel id={id}>
      <PanelHeader>Избранные</PanelHeader>
      <Group>
        {[...Array.from({ length: 6 }, (v, i) => i)].map((i) => (
          <React.Fragment>
            <RichCell
              onClick={go}
              data-nav={PRODUCTS_DETAIL}
              multiline
              text={truncate(
                `Домашний рецепт любимого торта. Три слоя бисквитных коржей: первый —
          с какао, второй – с орехами, третий – с маком. Крем с вареной
          сгущенкой и сливочным маслом. Состав: мука в/с, яйцо, масло
          сливочное, молоко сгущенное вареное, сметана, сахар, какао, мак
          пищевой, орех грецкий, ликер Бэйлиз.`,
                100
              )}
              caption="1200 гр"
              after="1200 ₽"
              expandable
              before={<Avatar size={128} mode="image" src={cake} />}
            >
              Торт 'красный бархат'
            </RichCell>
            <Spacing separator />
          </React.Fragment>
        ))}
      </Group>
    </Panel>
  );
};
export default FavoritesMain;
