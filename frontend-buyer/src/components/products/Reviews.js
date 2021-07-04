import { Card, Avatar, Spacing, RichCell, ContentCard } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow, Icon12Favorite } from '@vkontakte/icons';
import React from 'react';
import pfp from '../../assets/pfp.jpeg';
import PropTypes from 'prop-types';
import * as to from '../../navigation/products';

const data = [
  {
    name: 'Татьяна',
    text: 'Добрый день. Торт понравился, спасибо. Сыночек передал спасибо. Очень вкусно.',
    rating: 5,
    date: '2 июня 2021',
  },
  {
    name: 'Анна',
    text: 'Супер!!! Спасибо.  Сынуля счастлив!!! Им очень понравился!!! Очень очень вкусно!  Большое,  больше спасибо!!! Вы чудо!!!',
    rating: 5,
    date: '3 июня 2021',
  },
  {
    name: 'Саша',
    text: 'Гавно',
    rating: 1,
    date: '3 июня 2021',
  },
];
const Reviews = ({ go, to }) => {
  return data.map((item) => (
    <React.Fragment>
      <RichCell
        multiline
        //   before={<Avatar size={48} style={{ objectFit: 'cover', backgroundColor:'' }} />}
        text={item.text}
        caption={item.date}
        after={
          <div>
            <div style={{ display: 'flex', color: '#fadd00' }}>
              {[...Array.from({ length: item.rating }, (v, i) => i)].map(
                (i) => (
                  <Icon12Favorite />
                )
              )}
            </div>
          </div>
        }
      >
        {item.name}
      </RichCell>
      <Spacing separator />
    </React.Fragment>
  ));
};
Reviews.propTypes = {
  go: PropTypes.func.isRequired,
  to: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
  }),
};
export default Reviews;
