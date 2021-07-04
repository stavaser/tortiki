import React, { useState } from 'react';
import {
  View,
  Button,
  FormItem,
  Checkbox,
  PanelHeaderButton,
  PanelHeaderClose,
  ModalPageHeader,
  ModalCard,
  ModalRoot,
  FormLayout,
} from '@vkontakte/vkui';
import { Icon24Dismiss } from '@vkontakte/icons';
import ProductsMain from '../panels/products/ProductsMain';
import ProductsDetail from '../panels/products/ProductsDetail';
import AddProduct from '../panels/products/AddProduct';
import EditProducts from '../panels/products/EditProduct';

import * as to from '../navigation/products';
import SellerPanel from '../panels/products/SellerPanel';
const MODAL_NAME = 'filters';

const ProductsView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.PRODUCTS_MAIN);

  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);

  const [filterSizes, setFilterSizes] = useState([36]);
  const [filterStyles, setFilterStyles] = useState(['Вечерний']);

  const [previewImage, setPreviewImage] = useState('');
  const [activeModal, setActiveModal] = useState(null);

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
  const openModal = (name) => {
    setActiveModal(name);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const onChangeFilterSize = (e) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setFilterSizes([...filterSizes, +value]);
    } else {
      setFilterSizes(filterSizes.filter((v) => v !== +value));
    }
  };

  const onChangeFilterStyle = (e) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setFilterStyles([...filterStyles, value]);
    } else {
      setFilterStyles(filterStyles.filter((v) => v !== value));
    }
  };

  const applyFilters = () => {
    let count = 0;

    filterSizes.length && count++;
    filterStyles.length && count++;

    closeModal();
    setFiltersCount(count);
  };

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalCard
        id={to.MODAL_CARD_FILTERS}
        header={'Фильтры'}
        actions={
          <Button size="l" mode="primary" onClick={applyFilters}>
            Показать результаты
          </Button>
        }
      >
        <FormLayout>
          <FormItem>
            <Checkbox>Есть доставка на дом</Checkbox>
            <Checkbox>Есть доставка в другие регионы</Checkbox>
            <Checkbox>Еще что-то...</Checkbox>
          </FormItem>

          {/* <FormItem>
            <Button size="l" stretched onClick={applyFilters}>
              Показать результаты
            </Button>
          </FormItem> */}
        </FormLayout>
      </ModalCard>
      <ModalCard
        id={to.MODAL_CARD_PHOTO_PREVIEW}
        onClose={() => setActiveModal(null)}
        header={'Фотография'}
        style={{ marginBottom: '200px' }}
      >
        <img src={previewImage} style={{ width: '100%', marginTop: '10px' }} />
      </ModalCard>
    </ModalRoot>
  );

  const modal_action = (e) => {
    const currentTarget = e.currentTarget.dataset.nav;
    const file = e.currentTarget.dataset.image;
    setActiveModal(currentTarget);
    setPreviewImage(file);
  };

  return (
    <View activePanel={activePanel} id={id} modal={modal}>
      <ProductsMain
        id={to.PRODUCTS_MAIN}
        go={go}
        filtersCount={filtersCount}
        openModal={openModal}
      />
      <ProductsDetail id={to.PRODUCTS_DETAIL} go={go} />
      <AddProduct id={to.PRODUCTS_ADD} go={go} />
      <EditProducts id={to.PRODUCTS_EDIT} go={go} />
      <SellerPanel id={to.SELLER_PANEL} go={go} modal_action={modal_action} />
    </View>
  );
};
export default ProductsView;
