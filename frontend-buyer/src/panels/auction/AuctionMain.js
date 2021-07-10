import {
  CardGrid,
  ContentCard,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cake2 from '../../assets/cake2.jpeg';
import * as to from '../../navigation/auction';
import { getLotteryInfo } from '../../redux/actions/lottery.actions';
import { LOTTERY_ID_SET } from '../../redux/constants/lottery.constants';
import { LOTTERY_PANEL_CHANGED } from '../../redux/constants/navigation.constants';

const AuctionMain = ({ id, data }) => {
  const { lottery } = data;
  const dispatch = useDispatch();

  const changePanel = (panel, lottery_id) => {
    dispatch(getLotteryInfo(lottery_id)).then(() => {
      dispatch({
        type: LOTTERY_PANEL_CHANGED,
        payload: panel,
      });
    });
  };

  return (
    <Panel id={id}>
      <PanelHeader>Розыгрыши</PanelHeader>

      <Group mode="plain" header={<Header>Все</Header>}>
        <CardGrid size="m">
          {lottery.length > 0 &&
            lottery.map((item) => (
              <ContentCard
                onClick={() => changePanel(to.AUCTION_DETAIL, item.id)}
                image={item.pictures[0] || cake2}
                text={item.title}
                caption={
                  <React.Fragment>
                    4 из 10 свободно
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
                      {item.price} ₽
                    </div>
                  </React.Fragment>
                }
                maxHeight={100}
              />
            ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
export default AuctionMain;
