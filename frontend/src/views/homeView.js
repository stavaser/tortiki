import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import cake from '../assets/cake.jpeg';

import {
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  Button,
  SimpleCell,
  PanelHeaderBack,
  Div,
  CardGrid,
  Card,
  CardScroll,
  ContentCard,
  Gallery,
  InfoRow,
  Title,
} from '@vkontakte/vkui';

const HomeView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View id="home" activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Главная</PanelHeader>
        <Group mode="plain" header={<Header>Популярное</Header>}>
          <CardScroll size="s">
            <Card>
              <div style={{ paddingBottom: '66%' }} />
            </Card>
            <Card>
              <div style={{ paddingBottom: '66%' }} />
            </Card>
            <Card>
              <div style={{ paddingBottom: '66%' }} />
            </Card>
            <Card>
              <div style={{ paddingBottom: '66%' }} />
            </Card>
            <Card>
              <div style={{ paddingBottom: '66%' }} />
            </Card>
          </CardScroll>
        </Group>
        <Group mode="plain" header={<Header>Каталог</Header>}>
          <CardGrid size="m">
            <ContentCard
              id="1"
              onClick={() => setActivePanel('detail')}
              image={cake}
              header="Торт 'красный бархат'"
              caption="1200 гр"
              maxHeight={100}
            />
            <ContentCard
              id="2"
              onClick={() => setActivePanel('detail')}
              image={cake}
              header="Торт 'красный бархат'"
              caption="1200гр"
              maxHeight={100}
            />
          </CardGrid>
        </Group>
      </Panel>
      <Panel id="detail">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
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
            <div style={{ backgroundColor: 'var(--destructive)' }} />
            <div
              style={{ backgroundColor: 'var(--button_commerce_background)' }}
            />
            <div style={{ backgroundColor: 'var(--accent)' }} />
          </Gallery>

          <Div>
            <Title level="1" weight="bold">
              1200 руб
            </Title>
            <Title level="1" weight="semibold" style={{ marginTop: 16 }}>
              Торт 'красный бархат'
            </Title>
            <Title level="3" weight="regular">
              1200 гр
            </Title>
          </Div>
        </Group>
        <Group>
          <Header mode="secondary">Информация о продукте</Header>
          <SimpleCell multiline>
            <InfoRow header="Описание">
              Домашний рецепт любимого торта. Три слоя бисквитных коржей: первый
              — с какао, второй – с орехами, третий – с маком. Крем с вареной
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
            // style={{ position: 'fixed', width: '100%' }}
            size="l"
            stretched
            mode="commerce"
          >
            Написать в What's App
          </Button>
        </Div>
      </Panel>
    </View>
  );
};
export default HomeView;
