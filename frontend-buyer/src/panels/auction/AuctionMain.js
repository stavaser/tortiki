import { Icon24Add, Icon24Filter } from '@vkontakte/icons';
import {
  CardGrid,
  CellButton,
  ContentCard,
  Group,
  Header,
  Panel,
  PanelHeader,
  Banner,
  Avatar,
  Button,
  CardScroll,
  Card,
  HorizontalScroll,
  HorizontalCell,
  SubnavigationBar,
  SubnavigationButton,
  Counter,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import cake2 from '../../assets/cake2.jpeg';
import * as to from '../../navigation/auction';

const categories = ['Торты', 'Капкейки', 'Пицца', 'Суши'];

const AuctionMain = ({ id, go, openModal, filtersCount }) => {
  const [category, setCategory] = useState(false);

  const selectCategory = (category) => {
    setCategory(category);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Розыгрыши</PanelHeader>
      <Group>
        <SubnavigationBar>
          <SubnavigationButton
            before={<Icon24Filter />}
            style={{ marginRight: '10px' }}
            selected={filtersCount > 0}
            expandable
            after={
              filtersCount > 0 && (
                <Counter mode="primary" size="s">
                  {filtersCount}
                </Counter>
              )
            }
            onClick={openModal}
          >
            Фильтры
          </SubnavigationButton>
          {categories.map((item) => (
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-50}
              style={{ marginRight: '10px' }}
            >
              <SubnavigationButton
                selected={item === category}
                onClick={() => selectCategory(item)}
              >
                {item}
              </SubnavigationButton>
            </Link>
          ))}
        </SubnavigationBar>
      </Group>
      {categories.map((item) => (
        <Group mode="plain" id={item} header={<Header>{item}</Header>}>
          <CardGrid size="m">
            {[...Array.from({ length: 6 }, (v, i) => i)].map((i) => (
              <ContentCard
                onClick={go}
                data-nav={to.AUCTION_DETAIL}
                image={cake2}
                text="Торт 'красный бархат'"
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
                      100 ₽
                    </div>
                  </React.Fragment>
                }
                maxHeight={100}
              />
            ))}
          </CardGrid>
        </Group>
      ))}
    </Panel>
  );
};
export default AuctionMain;
