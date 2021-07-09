import { Icon24Filter } from '@vkontakte/icons';
import {
  CardGrid,
  ContentCard,
  Counter,
  Group,
  Header,
  Panel,
  PanelHeader,
  SubnavigationBar,
  SubnavigationButton,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import cake2 from '../../assets/cake2.jpeg';
import * as to from '../../navigation/auction';
import { getLotteryInfo } from '../../redux/actions/lottery.actions';
import { LOTTERY_ID_SET } from '../../redux/constants/lottery.constants';

const AuctionMain = ({ id, go, openModal, filtersCount, data }) => {
  const [category, setCategory] = useState(false);
  const { lottery } = data;
  const dispatch = useDispatch();
  const selectCategory = (category) => {
    setCategory(category);
  };
  const onClick = (e, lottery_id) => {
    console.log(lottery_id);
    dispatch({
      type: LOTTERY_ID_SET,
      payload: lottery_id,
    });
    go(e);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Розыгрыши</PanelHeader>

      <Group mode="plain" header={<Header>Все</Header>}>
        <CardGrid size="m">
          {lottery.length > 0 &&
            lottery.map((item) => (
              <ContentCard
                onClick={(e) => onClick(e, item.id)}
                data-nav={to.AUCTION_DETAIL}
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
