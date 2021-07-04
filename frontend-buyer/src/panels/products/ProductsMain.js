import { Icon24Filter, Icon24FavoriteOutline } from '@vkontakte/icons';
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
  SubnavigationBar,
  SubnavigationButton,
  Counter,
} from '@vkontakte/vkui';
import { Link } from 'react-scroll';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cake from '../../assets/cake.jpeg';

import * as to from '../../navigation/products';
import ProductCard from '../../components/products/ProductCard';

const categories = ['Торты', 'Капкейки', 'Пицца', 'Суши'];
const ProductsMain = ({ id, go, openModal, filtersCount }) => {
  const [category, setCategory] = useState(false);

  const selectCategory = (category) => {
    setCategory(category);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Продукты</PanelHeader>
      <Group mode="plain" header={<Header>Популярное</Header>}>
        <CardScroll size="m">
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
      <Group>
        <SubnavigationBar>
          <SubnavigationButton
            before={<Icon24Filter />}
            style={{ marginRight: '10px' }}
            selected={filtersCount > 0}
            expandable
            after={
              filtersCount > 0 && (
                <Counter mode="primary" size="s">
                  {filtersCount}
                </Counter>
              )
            }
            onClick={openModal}
          >
            Фильтры
          </SubnavigationButton>
          {categories.map((item) => (
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-50}
              style={{ marginRight: '10px' }}
            >
              <SubnavigationButton
                selected={item === category}
                onClick={() => selectCategory(item)}
              >
                {item}
              </SubnavigationButton>
            </Link>
          ))}
        </SubnavigationBar>
      </Group>
      {categories.map((item) => (
        <Group mode="plain" id={item} header={<Header>{item}</Header>}>
          <CardGrid size="m">
            {[...Array.from({ length: 6 }, (v, i) => i)].map((i) => (
              <ProductCard
                go={go}
                to={to.PRODUCTS_DETAIL}
                data={{
                  image: cake,
                  title: "Торт 'красный бархат'",
                  price: '1200 ₽',
                  weight: '1200 гр',
                }}
              />
            ))}
          </CardGrid>
        </Group>
      ))}
    </Panel>
  );
};

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
