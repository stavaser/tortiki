import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';
import ProductsMain from '../panels/products/ProductsMain';
import ProductsDetail from '../panels/products/ProductsDetail';
import AddProduct from '../panels/products/AddProduct';
import EditProducts from '../panels/products/EditProduct';
// import {
//   PRODUCTS_ADD,
//   PRODUCTS_EDIT,
//   PRODUCTS_DETAIL,
//   PRODUCTS_MAIN,
// } from '../navigation/products';
import * as to from '../navigation/products';
const ProductsView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.PRODUCTS_MAIN);

  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View activePanel={activePanel} id={id}>
      <ProductsMain id={to.PRODUCTS_MAIN} go={go} />
      <ProductsDetail id={to.PRODUCTS_DETAIL} go={go} />
      <AddProduct id={to.PRODUCTS_ADD} go={go} />
      <EditProducts id={to.PRODUCTS_EDIT} go={go} />
    </View>
  );
};
export default ProductsView;
