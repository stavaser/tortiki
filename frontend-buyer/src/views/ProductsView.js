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
const MODAL_NAME = 'filters';

const FILTERS_SIZE = [
  { value: 36, label: 36 },
  { value: 37, label: 37 },
  { value: 38, label: 38 },
  { value: 39, label: 39 },
];

const FILTERS_STYLE = [
  { value: 'Вечерний', label: 'Вечерний' },
  { value: 'Деловой', label: 'Деловой' },
  { value: 'Повседневный', label: 'Повседневный' },
  { value: 'Спортивный', label: 'Спортивный' },
];
const ProductsView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.PRODUCTS_MAIN);

  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);

  const [filterSizes, setFilterSizes] = useState([36]);
  const [filterStyles, setFilterStyles] = useState(['Вечерний']);

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
  const openModal = () => {
    setFiltersModalOpened(true);
  };

  const closeModal = () => {
    setFiltersModalOpened(false);
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
    <ModalRoot
      activeModal={filtersModalOpened ? MODAL_NAME : null}
      onClose={closeModal}
    >
      <ModalCard
        id={MODAL_NAME}
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
    </ModalRoot>
  );
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
    </View>
  );
};
export default ProductsView;
