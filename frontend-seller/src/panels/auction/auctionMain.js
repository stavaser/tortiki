import { Icon24Add } from '@vkontakte/icons';
import {
  CardGrid,
  CellButton,
  ContentCard,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import React from 'react';
import cake2 from '../../assets/cake2.jpeg';

const AuctionMain = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Розыгрыши</PanelHeader>
      <Group>
        <CellButton
          centered
          before={<Icon24Add />}
          onClick={go}
          data-to="add_auction"
        >
          Создать розыгрыш
        </CellButton>
      </Group>
      <Group mode="plain" header={<Header>Активные (3)</Header>}>
        <CardGrid size="m">
          <ContentCard
            id="1"
            onClick={go}
            data-to="auction_detail"
            image={cake2}
            subtitle="Торт 'красный бархат'"
            header="Ставка 100 руб"
            caption="(4 из 10 мест свободно)"
            maxHeight={100}
          />
          <ContentCard
            id="1"
            onClick={go}
            data-to="auction_detail"
            image={cake2}
            subtitle="Торт 'красный бархат'"
            header="Ставка 100 руб"
            caption="4 из 10 мест свободно"
            maxHeight={100}
          />
          <ContentCard
            id="1"
            onClick={go}
            data-to="auction_detail"
            image={cake2}
            subtitle="Торт 'красный бархат'"
            header="Ставка 100 руб"
            caption="4 из 10 мест свободно"
            maxHeight={100}
          />
        </CardGrid>
      </Group>
      <Group mode="plain" header={<Header>Архив (1)</Header>}>
        <CardGrid size="m">
          <ContentCard
            id="1"
            onClick={go}
            data-to="auction_detail"
            image={cake2}
            subtitle="Торт 'красный бархат'"
            header="Ставка 100 руб"
            caption="(4 из 10 мест свободно)"
            maxHeight={100}
          />
        </CardGrid>
      </Group>
    </Panel>
  );
};
export default AuctionMain;
