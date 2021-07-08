import { Card, Avatar, Spacing, RichCell, ContentCard } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import PropTypes from 'prop-types';
import * as to from '../../navigation/products';
import { useSelector, useDispatch } from 'react-redux';
import { PRODUCT_ID_SET } from '../../redux/constants/products.constants';
import { CellButton } from '@vkontakte/vkui';
import { Button } from 'react-scroll';

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
      maxHeight={400}
      product_id={product_id}
      image={data.image}
      text={data.title}
      // header={data.price}
      caption={
        <React.Fragment>
          {data.weight + ' г'}
          <div
            style={{
              marginTop: '16px',
              // width: '100%',
              backgroundColor: 'rgba(0,0,0,0.08)',
              borderRadius: '5px',
              textAlign: 'center',
              padding: '8px',
              color: 'black',
            }}
          >
            860 ₽
          </div>
        </React.Fragment>
      }
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
