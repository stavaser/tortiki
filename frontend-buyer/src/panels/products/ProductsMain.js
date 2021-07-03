import { Icon24Add } from '@vkontakte/icons';
import {
  CardGrid,
  CellButton,
  ContentCard,
  Group,
  Header,
  Panel,
  PanelHeader,
  Banner,
  Avatar,
  Button,
  CardScroll,
  Card,
  HorizontalScroll,
  HorizontalCell,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import cake from '../../assets/cake.jpeg';

import * as to from '../../navigation/products';

const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 8,
  border: '1px solid var(--placeholder_icon_background)',
  objectFit: 'cover',
};

const ProductsMain = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Продукты</PanelHeader>
    <Group mode="plain" header={<Header>Популярное</Header>}>
      <CardScroll size="m" style={{ margin: '-8px' }}>
        {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
          <Card size="l" mode="shadow" style={{ margin: '8px' }}>
            <div style={{ height: 96, padding: '10px', display: 'flex' }}>
              <Avatar size={96} mode="image" src={cake} />
              <div style={{ marginLeft: '16px' }}>
                <p>Торт 'красный бархат'</p>
                <Button mode="outline">1200 ₽</Button>
              </div>
            </div>
          </Card>
        ))}
      </CardScroll>
    </Group>
    <Group mode="plain" header={<Header>Продукты</Header>}>
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
