import { Card, Avatar, Spacing, RichCell, Div } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import pfp from '../../assets/pfp.jpeg';
import { Icon16Favorite } from '@vkontakte/icons';

const SellerCard = ({ from, go, to, disabled }) => {
  return (
    <Card mode="outline" onClick={go} data-nav={to}>
      <RichCell
        multiline
        disabled={disabled}
        before={<Avatar size={72} src={pfp} style={{ objectFit: 'cover' }} />}
        text={<>89841138757</>}
        after="Продавец"
        caption={
          <div style={{ display: 'flex', color: '#fadd00' }}>
            {[...Array.from({ length: 5 }, (v, i) => i)].map((i) => (
              <Icon16Favorite />
            ))}
          </div>
        }
      >
        Имя Фамилия
      </RichCell>
    </Card>
  );
};

export default SellerCard;
