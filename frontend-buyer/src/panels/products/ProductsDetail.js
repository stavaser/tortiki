import {
  Icon28ArchiveOutline,
  Icon28EditOutline,
  Icon16StarCircleFillYellow,
  Icon36Like,
  Icon36LikeOutline,
  Icon16Done,
  Icon20TrashSmileOutline,
  Icon28FavoriteOutline,
} from '@vkontakte/icons';

import { Card } from '@vkontakte/vkui';
import {
  Button,
  Div,
  Gallery,
  Group,
  Header,
  InfoRow,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SimpleCell,
  Title,
  Banner,
  Avatar,
  RichCell,
  Spacing,
  PanelHeaderButton,
  PanelHeaderContent,
  Snackbar,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cake from '../../assets/cake.jpeg';
import pfp from '../../assets/pfp.jpeg';
import SellerCard from '../../components/products/SellerCard';
import * as to from '../../navigation/products';

const ProductsDetail = ({ id, go, back, from }) => {
  const [liked, setLiked] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const snackBar = (
    <Snackbar
      duration={800}
      onClose={() => setSnackBarVisible(false)}
      before={
        liked ? (
          <Icon28FavoriteOutline fill="var(--accent)" />
        ) : (
          <Icon20TrashSmileOutline
            fill="var(--accent)"
            width={28}
            height={28}
          />
        )
      }
    >
      {liked ? 'Добавлено в избранные!' : 'Удалено из избранных!'}
    </Snackbar>
  );

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        // TODO: need a stack-like behavior ig?
        left={
          <PanelHeaderBack
            onClick={go}
            data-nav={from ? from : to.PRODUCTS_MAIN}
          />
        }
        right={
          <PanelHeaderButton
            onClick={() => {
              setSnackBarVisible(true);
              setLiked(!liked);
            }}
          >
            {liked ? (
              <Icon36Like style={{ color: 'red' }} />
            ) : (
              <Icon36LikeOutline />
            )}
          </PanelHeaderButton>
        }
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
          <div
            style={{ backgroundColor: 'var(--button_commerce_background)' }}
          />
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

        <Div>
          <SellerCard go={go} to={to.SELLER_PANEL} />
        </Div>
      </Group>
      <Group>
        <Header mode="secondary">Информация о продукте</Header>
        <SimpleCell multiline>
          <InfoRow header="Описание">
            Домашний рецепт любимого торта. Три слоя бисквитных коржей: первый —
            с какао, второй – с орехами, третий – с маком. Крем с вареной
            сгущенкой и сливочным маслом. Состав: мука в/с, яйцо, масло
            сливочное, молоко сгущенное вареное, сметана, сахар, какао, мак
            пищевой, орех грецкий, ликер Бэйлиз.
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
      <Group>
        <Div>
          <SellerCard go={go} to={to.SELLER_PANEL} />
        </Div>
      </Group>
      <Div>
        <Button size="l" stretched mode="commerce">
          Написать в What's App
        </Button>
      </Div>
      {snackBarVisible && snackBar}
    </Panel>
  );
};

ProductsDetail.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default ProductsDetail;
