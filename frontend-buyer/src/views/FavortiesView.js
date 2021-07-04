import { Icon28DeleteOutline, Icon28EditOutline } from '@vkontakte/icons';
import { Button, Div, ModalCard, ModalRoot, Root, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import GalleryMain from '../panels/gallery/GalleryMain';
import * as to from '../navigation/favorites';
import * as views from '../navigation/epic';
import * as products from '../navigation/products';
import FavoritesMain from '../panels/favorites/FavoritesMain';
import ProductsDetail from '../panels/products/ProductsDetail';
import ProductsView from './ProductsView';

const FavoritesView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.FAVORITES_MAIN);
  const [activeView, setActiveView] = useState(views.FAVORITES);

  const go = (e) => {
    const panel = e.target.dataset.nav || e.currentTarget.dataset.nav;
    if (panel) {
      setActivePanel(panel);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <FavoritesMain id={to.FAVORITES_MAIN} go={go} />
      {/* TODO: ля а как.. */}
      <ProductsDetail
        id={products.PRODUCTS_DETAIL}
        go={go}
        from={to.FAVORITES_MAIN}
      />
    </View>
  );
};
export default FavoritesView;
