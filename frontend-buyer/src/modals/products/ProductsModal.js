import {
  Icon20TrashSmileOutline,
  Icon24Dismiss,
  Icon28FavoriteOutline,
  Icon28Like,
  Icon28LikeOutline,
  Icon36Like,
} from '@vkontakte/icons';
import {
  Button,
  FormItem,
  FormLayoutGroup,
  Input,
  Select,
  SimpleCell,
} from '@vkontakte/vkui';
import { CustomSelectOption } from '@vkontakte/vkui';
import { Caption } from '@vkontakte/vkui';
import { Spacing } from '@vkontakte/vkui';
import { InfoRow } from '@vkontakte/vkui';
import { Div } from '@vkontakte/vkui';
import {
  FormLayout,
  Group,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  Title,
  Header,
  Gallery,
} from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductInfo,
  onFavoriteClick,
} from '../../redux/actions/products.actions';
import { PRODUCT_INFO_MODAL_OPENED } from '../../redux/constants/products.constants';
import SellerCard from '../../components/products/SellerCard';
import { Snackbar } from '@vkontakte/vkui';
const ProductsModal = ({ data }) => {
  const dispatch = useDispatch();

  const activeModal = useSelector((state) => state.products.modal);
  const product_id = useSelector((state) => state.products.product_id);
  const product = useSelector((state) => state.products.info) || [];
  const liked = useSelector((state) => state.products.info.liked);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  console.log('liked', liked);

  useEffect(() => {
    dispatch({
      type: PRODUCT_INFO_MODAL_OPENED,
      payload: { modal: null },
    });
  }, []);

  const onClick = (modal) => {
    dispatch({
      type: PRODUCT_INFO_MODAL_OPENED,
      payload: { modal },
    });
  };

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
    <ModalRoot activeModal={activeModal} onClose={() => onClick(null)}>
      <ModalPage
        id={PRODUCT_INFO_MODAL_OPENED}
        settlingHeight={100}
        header={
          <ModalPageHeader
            right={
              <PanelHeaderButton onClick={() => onClick(null)}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            }
          >
            {product.title}
          </ModalPageHeader>
        }
      >
        <Group>
          <Gallery
            slideWidth="90%"
            style={{ height: 250 }}
            bullets="dark"
            showArrows
          >
            {product.pictures &&
              product.pictures.map((item) => {
                console.log(item);
                return <img src={item} style={{ objectFit: 'cover' }} />;
              })}
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
              <Title level="3" weight="semibold">
                {product.price} ₽
              </Title>
            }
            subtitle={
              <Caption level="1" weight="regular">
                {product.weight} гр
              </Caption>
            }
          >
            <Title level="3" weight="regular">
              {product.title}
            </Title>
          </Header>
          <SimpleCell multiline>
            <InfoRow header="Описание">{product.description}</InfoRow>
          </SimpleCell>
          <Div>
            <SellerCard />
          </Div>
          <Div style={{ display: 'flex' }}>
            <Button
              size="m"
              mode="secondary"
              style={{
                marginRight: '8px',
              }}
              onClick={() => {
                setSnackBarVisible(true);
                dispatch(onFavoriteClick({ liked: !liked, product_id }));
              }}
            >
              {liked ? (
                <Icon28Like style={{ color: 'red' }} />
              ) : (
                <Icon28LikeOutline style={{ color: 'grey' }} />
              )}
            </Button>

            <Button size="m" stretched mode="commerce">
              Написать в What's App
            </Button>
          </Div>
        </Group>
        {snackBarVisible && snackBar}
      </ModalPage>
    </ModalRoot>
  );
};

export default ProductsModal;
