import {
  Icon20TrashSmileOutline,
  Icon28FavoriteOutline,
  Icon36Like,
  Icon36LikeOutline,
} from '@vkontakte/icons';
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
  PanelHeaderButton,
  SimpleCell,
  Snackbar,
  Title,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cake from '../../assets/cake.jpeg';
import SellerCard from '../../components/products/SellerCard';
import * as to from '../../navigation/products';
import {
  getProductInfo,
  onFavoriteClick,
} from '../../redux/actions/products.actions';
import { PRODUCT_LIKE_CLICKED } from '../../redux/constants/products.constants';

const ProductsDetail = ({ id, go, back, from }) => {
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const product_id = useSelector((state) => state.products.product_id);
  const product = useSelector((state) => state.products.info) || [];
  const liked = useSelector((state) => state.products.info.liked);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfo(product_id));
  }, []);

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
              dispatch(onFavoriteClick({ liked: !liked, product_id }));
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
              {product.price} ₽
            </Title>
          }
          subtitle={
            <Title level="3" weight="regular">
              {product.weight} гр
            </Title>
          }
        >
          <Title level="1" weight="semibold">
            {product.title}
          </Title>
        </Header>
        {!from && (
          <Div>
            <SellerCard go={go} to={to.SELLER_PANEL} />
          </Div>
        )}
      </Group>
      <Group>
        <Header mode="secondary">Информация о продукте</Header>
        <SimpleCell multiline>
          <InfoRow header="Описание">{product.description}</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Состав">{product.ingredients}</InfoRow>
        </SimpleCell>
      </Group>
      {(product.delivery_local || product.delivery_general) && (
        <Group>
          {product.delivery_local && (
            <SimpleCell>
              <InfoRow header="Доставка на дом:">
                {product.local_price} ₽
              </InfoRow>
            </SimpleCell>
          )}
          {product.delivery_general && (
            <SimpleCell>
              <InfoRow header="Доставка в другой поселок:">
                {product.general_price}
              </InfoRow>
            </SimpleCell>
          )}
        </Group>
      )}
      {!from && (
        <Group>
          <Div>
            <SellerCard go={go} to={to.SELLER_PANEL} />
          </Div>
        </Group>
      )}
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
