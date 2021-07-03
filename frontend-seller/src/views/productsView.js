import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';
import ProductsMain from '../panels/products/productsMain';
import ProductsDetail from '../panels/products/productsDetail';
import AddProduct from '../panels/products/addProduct';
import EditProducts from '../panels/products/editProduct';

const ProductsView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('products_main');

  const go = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };

  return (
    <View activePanel={activePanel} id={id}>
      <ProductsMain id="products_main" go={go} />
      <ProductsDetail id="products_detail" go={go} />
      <AddProduct id="add_product" go={go} />
      <EditProducts id="edit_product" go={go} />
    </View>
  );
};
export default ProductsView;
