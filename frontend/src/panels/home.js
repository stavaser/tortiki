import React from 'react';
import ReactDOM from 'react-dom';
import cake from '../assets/cake.jpeg';

import {
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
} from '@vkontakte/vkui';

const Home = ({ id }) => (
  <Panel id={id}>
    {console.log('iddd', id)}
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
          image={cake}
          // subtitle="Елена Михайловна"
          header="Торт 'красный бархат'"
          // text="1200гр"
          caption="1200 гр"
          maxHeight={100}
        />
        <ContentCard
          image={cake}
          // subtitle="Елена Михайловна"
          header="Торт 'красный бархат'"
          // text="1200гр"
          caption="1200гр"
          maxHeight={100}
        />
      </CardGrid>
    </Group>
  </Panel>
);
export default Home;
