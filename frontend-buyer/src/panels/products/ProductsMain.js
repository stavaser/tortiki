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
const ProductsMain = ({ id, go, openModal, filtersCount, data }) => {
  const [category, setCategory] = useState(false);
  const { products } = data;
  console.log(products);
  const selectCategory = (category) => {
    setCategory(category);
  };

  return (
    <Panel id={id}>
      <PanelHeader>Продукты</PanelHeader>

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
          {products.length > 1 &&
            products.map((item) => (
              <Link
                to={item.product_type}
                spy={true}
                smooth={true}
                offset={-50}
                style={{ marginRight: '10px' }}
              >
                <SubnavigationButton
                  selected={item.product_type === category}
                  onClick={() => selectCategory(item.product_type)}
                >
                  {item.product_type}
                </SubnavigationButton>
              </Link>
            ))}
        </SubnavigationBar>
      </Group>
      {products.length > 0 &&
        products.map((category) => (
          <Group
            mode="plain"
            id={category.product_type}
            header={<Header>{category.product_type}</Header>}
          >
            <CardGrid size="m">
              {category.products.map((item) => {
                return (
                  <ProductCard
                    go={go}
                    to={to.PRODUCTS_DETAIL}
                    product_id={item.id}
                    data={{
                      image: item.pictures[0] || cake,
                      title: item.title,
                      price: item.price,
                      weight: item.weight,
                    }}
                  />
                );
              })}
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
