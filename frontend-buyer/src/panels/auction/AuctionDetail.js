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
import React from 'react';
import Countdown from '../../components/Countdown';
import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';
import conf2 from '../../assets/conf2.gif';
import * as to from '../../navigation/auction';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const AuctionDetail = ({ id, go, modal_action }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={go} data-nav={to.AUCTION_MAIN} />}
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
            <Title level="1" weight="bold">
              100 руб
            </Title>
          }
          subtitle={
            <Title level="3" weight="regular">
              1200 гр
            </Title>
          }
        >
          <Title level="1" weight="semibold">
            Торт 'красный бархат'
          </Title>
        </Header>
      </Group>
      <Group
        header={<Header mode="secondary">До конца розыгрыша остается:</Header>}
      >
        <Div>
          {/* TODO: adapt for iphone 5 screen */}
          <Countdown />
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
        <Header mode="secondary">Информация о продукте</Header>
        <SimpleCell multiline>
          <InfoRow header="Описание">
            Домашний рецепт любимого торта. Три слоя бисквитных коржей: первый —
            с какао, второй – с орехами, третий – с маком. Крем с вареной
            сгущенкой и сливочным маслом. Состав: мука в/с, яйцо, масло
            сливочное, молоко сгущенное вареное, сметана, сахар, какао, мак
            пищевой, орех грецкий, ликер Бэйлиз.
          </InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Состав">мука?</InfoRow>
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell>
          <InfoRow header="Доставка на дом:">150 руб</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Возможна доставка в другой поселок:">Да</InfoRow>
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
