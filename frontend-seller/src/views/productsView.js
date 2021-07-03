import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';
import ProductsMain from '../panels/products/ProductsMain';
import ProductsDetail from '../panels/products/ProductsDetail';
import AddProduct from '../panels/products/AddProduct';
import EditProducts from '../panels/products/EditProduct';

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
