import { Card, Avatar, Spacing, RichCell, ContentCard } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import PropTypes from 'prop-types';
import * as to from '../../navigation/products';
import { useSelector, useDispatch } from 'react-redux';
import {
  PRODUCT_ID_SET,
  PRODUCT_INFO_MODAL_OPENED,
} from '../../redux/constants/products.constants';
import { CellButton } from '@vkontakte/vkui';
import { Button } from 'react-scroll';
import { MODAL_EDIT_PROFILE_OPENED } from '../../redux/constants/profile.constants';
import { openProductInfoModal } from '../../redux/actions/products.actions';

const ProductCard = ({ go, to, data, product_id }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(
      openProductInfoModal({ modal: PRODUCT_INFO_MODAL_OPENED, product_id })
    );
  };

  const pic = data.image;

  return (
    <ContentCard
      onClick={(e) => onClick(e)}
      style={{ 'pointer-events': 'all' }}
      data-nav={to}
      maxHeight={400}
      product_id={product_id}
      image={pic || cake}
      text={data.title}
      caption={
        <React.Fragment>
          {data.weight + ' г'}
          <div
            style={{
              marginTop: '16px',
              backgroundColor: 'rgba(0,0,0,0.08)',
              borderRadius: '5px',
              textAlign: 'center',
              padding: '8px',
              color: 'black',
            }}
          >
            {data.price} ₽
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
