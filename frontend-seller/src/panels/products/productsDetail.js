import { Icon28ArchiveOutline, Icon28EditOutline } from '@vkontakte/icons';
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
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import * as to from '../../navigation/products';

const ProductsDetail = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={go} data-nav={to.PRODUCTS_MAIN} />}
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
        data-nav={to.PRODUCTS_EDIT}
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
