import { Icon28ArchiveOutline, Icon28EditOutline } from '@vkontakte/icons';
import {
  Banner,
  Button,
  Div,
  Gallery,
  Group,
  Header,
  InfoRow,
  Link,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SimpleCell,
  Title,
  UsersStack,
} from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import Countdown from '../../components/Countdown';
import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';
import conf2 from '../../assets/conf2.gif';
import * as to from '../../navigation/auction';
import { Caption } from '@vkontakte/vkui';
import { useDispatch, useSelector } from 'react-redux';
import { getLotteryInfo } from '../../redux/actions/lottery.actions';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const AuctionDetail = ({ id, go, modal_action }) => {
  const lottery = useSelector((state) => state.lottery.info) || [];
  const lottery_id = useSelector((state) => state.lottery.lottery_id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLotteryInfo(lottery_id));
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack onClick={(e) => go(e)} data-nav={to.AUCTION_MAIN} />
        }
      >
        Подробнее
      </PanelHeader>
      <Group>
        <Gallery
          slideWidth="90%"
          style={{ height: 150 }}
          bullets="dark"
          showArrows
        >
          <img src={cake} style={{ objectFit: 'cover' }} />
          <div style={{ backgroundColor: 'var(--destructive)' }} />
          <div
            style={{ backgroundColor: 'var(--button_commerce_background)' }}
          />
          <div style={{ backgroundColor: 'var(--accent)' }} />
        </Gallery>

        <Header
          multiline
          level="1"
          weight="semibold"
          style={{ marginTop: 16 }}
          aside={
            <Title level="2" weight="semibold">
              {lottery.price} ₽
            </Title>
          }
          subtitle={
            <Caption level="1" weight="regular">
              {lottery.participants - lottery.taken} из {lottery.participants}{' '}
              свободно
            </Caption>
          }
        >
          <Title level="2" weight="regular">
            {lottery.title}
          </Title>
        </Header>
      </Group>
      <Group
        header={<Header mode="secondary">До конца розыгрыша остается:</Header>}
      >
        <Div>
          <Countdown
            date_end={lottery.date_end}
            date_added={lottery.date_added}
            key={lottery_id}
          />
        </Div>
      </Group>
      <Group>
        <Banner
          mode="image"
          size="m"
          header={<span>Выиграл билет №7!</span>}
          subheader="Елена Михайловна"
          background={
            <div
              style={{
                backgroundImage: `url(${conf2})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
              }}
            />
          }
          actions={
            <Button mode="overlay_primary" size="m">
              Все результаты
            </Button>
          }
        />
      </Group>
      <Group
        header={
          <Header
            mode="secondary"
            aside={
              <Link onClick={modal_action} data-nav={MODAL_PAGE_PARTICIPANTS}>
                Показать всех
              </Link>
            }
          >
            Участники
          </Header>
        }
      >
        <Div>
          <UsersStack
            photos={[cake, cake2, cake, 1, 2, 3]}
            size="m"
            count={3}
            layout="vertical"
          >
            Имя, Имя, Имя
            <br />и ещё 3 человека учавствуют
          </UsersStack>
        </Div>
      </Group>
      <Group>
        <SimpleCell multiline>
          <InfoRow header="Описание">{lottery.description}</InfoRow>
        </SimpleCell>
      </Group>

      <Div>
        <Button
          size="l"
          stretched
          mode="commerce"
          onClick={go}
          data-nav={to.AUCTION_SIGNUP}
        >
          Участвовать
        </Button>
      </Div>
    </Panel>
  );
};
export default AuctionDetail;
