import {
  Icon24Filter,
  Icon24FavoriteOutline,
  Icon16StarCircleFillYellow,
} from '@vkontakte/icons';
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
  Spacing,
  RichCell,
  Div,
  HorizontalScroll,
  HorizontalCell,
  SubnavigationBar,
  SubnavigationButton,
  Counter,
  Tabs,
  TabsItem,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import { Link } from 'react-scroll';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';
import pfp from '../../assets/pfp.jpeg';

import * as to from '../../navigation/products';
import Gallery from '../../components/products/Gallery';
import SellerCard from '../../components/products/SellerCard';
import ProductCard from '../../components/products/ProductCard';
import Reviews from '../../components/products/Reviews';
const fileList = [cake, cake2, cake, cake2];

const TAB_GALLERY = 'Галлерея';
const TAB_PRODUCTS = 'Товары';
const TAB_REVIEWS = 'Отзывы';

const SellerPanel = ({ id, go, from, modal_action }) => {
  const [activeTab, setActiveTab] = useState(TAB_GALLERY);
  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={go} data-nav={to.PRODUCTS_DETAIL} />}
      >
        Продавец
      </PanelHeader>
      <Group>
        <Div>
          <SellerCard from={to.SELLER_PANEL} disabled />
        </Div>

        <Tabs>
          <TabsItem
            onClick={() => setActiveTab(TAB_GALLERY)}
            selected={activeTab === TAB_GALLERY}
          >
            {TAB_GALLERY}
          </TabsItem>
          <TabsItem
            onClick={() => setActiveTab(TAB_PRODUCTS)}
            selected={activeTab === TAB_PRODUCTS}
          >
            {TAB_PRODUCTS}
          </TabsItem>
          <TabsItem
            onClick={() => setActiveTab(TAB_REVIEWS)}
            selected={activeTab === TAB_REVIEWS}
          >
            {TAB_REVIEWS}
          </TabsItem>
        </Tabs>
      </Group>
      {activeTab === TAB_GALLERY && <Gallery modal_action={modal_action} />}
      {activeTab === TAB_PRODUCTS && (
        <Group mode="plain">
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
      )}
      {activeTab === TAB_REVIEWS && <Reviews />}
    </Panel>
  );
};

SellerPanel.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default SellerPanel;
