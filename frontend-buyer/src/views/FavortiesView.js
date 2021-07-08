import { Icon28DeleteOutline, Icon28EditOutline } from '@vkontakte/icons';
import { Button, Div, ModalCard, ModalRoot, Root, View } from '@vkontakte/vkui';
import React, { useState, useEffect } from 'react';
import GalleryMain from '../panels/gallery/GalleryMain';
import * as to from '../navigation/favorites';
import * as views from '../navigation/epic';
import * as products from '../navigation/products';
import FavoritesMain from '../panels/favorites/FavoritesMain';
import ProductsDetail from '../panels/products/ProductsDetail';
import ProductsView from './ProductsView';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFavorites } from '../redux/actions/products.actions';

const FavoritesView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.FAVORITES_MAIN);
  const favorites = useSelector((state) => state.products.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavorites());
  }, []);
  const go = (e) => {
    const panel = e.target.dataset.nav || e.currentTarget.dataset.nav;
    if (panel) {
      setActivePanel(panel);
    }
  };

  return (
    <View id={id} activePanel={activePanel}>
      <FavoritesMain id={to.FAVORITES_MAIN} go={go} data={{ favorites }} />
      <ProductsDetail
        id={products.PRODUCTS_DETAIL}
        go={go}
        from={to.FAVORITES_MAIN}
      />
    </View>
  );
};
export default FavoritesView;
