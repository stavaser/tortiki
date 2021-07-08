import { Card, Avatar, Spacing, RichCell, ContentCard } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import PropTypes from 'prop-types';
import * as to from '../../navigation/products';
import { useSelector, useDispatch } from 'react-redux';
import { PRODUCT_ID_SET } from '../../redux/constants/products.constants';

const ProductCard = ({ go, to, data, product_id }) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch({
      type: PRODUCT_ID_SET,
      payload: product_id,
    });

    go(e);
  };
  return (
    <ContentCard
      onClick={(e) => onClick(e)}
      data-nav={to}
      product_id={product_id}
      image={data.image}
      subtitle={data.title}
      header={data.price}
      caption={data.weight}
      maxHeight={100}
    />
  );
};
ProductCard.propTypes = {
  go: PropTypes.func.isRequired,
  to: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
  }),
};
export default ProductCard;
