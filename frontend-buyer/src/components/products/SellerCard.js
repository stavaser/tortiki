import { Card, Avatar, Spacing, RichCell, Div } from '@vkontakte/vkui';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import React from 'react';
import pfp from '../../assets/pfp.jpeg';

const SellerCard = ({ from, go, to }) => {
  return (
    <Card mode="outline" onClick={go} data-nav={to}>
      <RichCell
        multiline
        before={<Avatar size={72} src={pfp} style={{ objectFit: 'cover' }} />}
        text={
          <>
            89841138757
            <Spacing />
          </>
        }
        after="Продавец"
        caption={
          <div style={{ display: 'flex' }}>
            <Icon16StarCircleFillYellow />
            <Icon16StarCircleFillYellow />
            <Icon16StarCircleFillYellow />
            <Icon16StarCircleFillYellow />
            <Icon16StarCircleFillYellow />
            <span style={{ marginLeft: '5px' }}>(12)</span>
          </div>
        }
      >
        Имя Фамилия
      </RichCell>
    </Card>
  );
};

export default SellerCard;
