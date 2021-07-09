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
import {
  PRODUCT_ID_SET,
  PRODUCT_INFO_MODAL_OPENED,
} from '../../redux/constants/products.constants';
import './style.css';
import { Card } from '@vkontakte/vkui';
import { Title } from '@vkontakte/vkui';
import { openProductInfoModal } from '../../redux/actions/products.actions';

const FavoritesMain = ({ id, go, data }) => {
  const { favorites } = data;
  console.log(favorites);
  const dispatch = useDispatch();

  const onClick = (e, product_id) => {
    dispatch(
      openProductInfoModal({ modal: PRODUCT_INFO_MODAL_OPENED, product_id })
    );
  };

  const truncate = (text, max = 80) =>
    text.length > 5 ? `${text.substring(0, max)}...` : text;

  return (
    <Panel id={id}>
      <PanelHeader>Избранные</PanelHeader>
      <Group>
        <Div>
          {favorites.length > 0 &&
            favorites.map((item) => {
              return (
                <React.Fragment>
                  <Card mode="shadow">
                    <RichCell
                      onClick={(e) => onClick(e, item.id)}
                      data-nav={PRODUCTS_DETAIL}
                      multiline
                      text={truncate(item.description)}
                      caption={`${item.weight} гр`}
                      after={`${item.price} гр`}
                      expandable
                      before={
                        <Avatar
                          size={128}
                          mode="image"
                          src={item.pictures[0]}
                        />
                      }
                    >
                      {item.title}
                    </RichCell>
                  </Card>
                  <Spacing />
                </React.Fragment>
              );
            })}
        </Div>
      </Group>
    </Panel>
  );
};
export default FavoritesMain;
