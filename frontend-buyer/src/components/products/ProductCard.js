import { Card, Avatar, Spacing, RichCell, ContentCard } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import PropTypes from 'prop-types';
import * as to from '../../navigation/products';

const ProductCard = ({ go, to, data }) => {
  return (
    <ContentCard
      onClick={go}
      data-nav={to}
      image={cake}
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
