import { Icon24Add } from '@vkontakte/icons';
import {
  CardGrid,
  CellButton,
  ContentCard,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import cake from '../../assets/cake.jpeg';

import * as to from '../../navigation/products';

const ProductsMain = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Продукты</PanelHeader>
    <Group>
      <CellButton
        centered
        before={<Icon24Add />}
        onClick={go}
        data-nav={to.PRODUCTS_ADD}
      >
        Добавить продукт
      </CellButton>
    </Group>
    <Group mode="plain" header={<Header>Ваши продукты (3)</Header>}>
      <CardGrid size="m">
        <ContentCard
          id="0"
          onClick={go}
          data-nav={to.PRODUCTS_DETAIL}
          image={cake}
          subtitle="Торт 'красный бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
        <ContentCard
          id="1"
          onClick={go}
          data-nav={to.PRODUCTS_DETAIL}
          image={cake}
          subtitle="Торт 'красный бархат'й бархат'й бархат'"
          header="1200 руб"
          caption="1200 гр"
          maxHeight={100}
        />
        <ContentCard
          id="2"
          onClick={go}
          data-nav={to.PRODUCTS_DETAIL}
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
          data-nav={to.PRODUCTS_DETAIL}
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
