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
import { useSelector, useDispatch } from 'react-redux';
import cake from '../../assets/cake.jpeg';
import { PRODUCT_ID_SET } from '../../redux/constants/products.constants';
import './style.css';

const FavoritesMain = ({ id, go, data }) => {
  const { favorites } = data;
  const dispatch = useDispatch();

  const onClick = (e, product_id) => {
    dispatch({
      type: PRODUCT_ID_SET,
      payload: product_id,
    });
    go(e);
  };

  const truncate = (text, max) =>
    text.length > 5 ? `${text.substring(0, max)}...` : text;

  return (
    <Panel id={id}>
      <PanelHeader>Избранные</PanelHeader>
      <Group>
        {favorites.length > 0 &&
          favorites.map((item) => {
            return (
              <React.Fragment>
                <RichCell
                  onClick={(e) => onClick(e, item.id)}
                  data-nav={PRODUCTS_DETAIL}
                  multiline
                  text={truncate(item.description, 100)}
                  caption={`${item.weight} гр`}
                  after={`${item.price} гр`}
                  expandable
                  before={<Avatar size={128} mode="image" src={cake} />}
                >
                  {item.title}
                </RichCell>
                <Spacing separator />
              </React.Fragment>
            );
          })}
      </Group>
    </Panel>
  );
};
export default FavoritesMain;
