import React, { useState } from 'react';
import AuctionMain from '../panels/auction/AuctionMain';
import AuctionDetail from '../panels/auction/AuctionDetail';
import EditAuction from '../panels/auction/EditAuction';
import AddAuction from '../panels/auction/AddAuction';

import cake from '../assets/cake.jpeg';
import sc from '../assets/sc.jpeg';

import {
  View,
  Header,
  Group,
  PanelHeaderButton,
  Title,
  Avatar,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Gradient,
  RichCell,
  Checkbox,
  FormItem,
  FormLayout,
  Button,
  ModalCard,
} from '@vkontakte/vkui';
import { Icon24Dismiss } from '@vkontakte/icons';

import * as to from '../navigation/auction';
import AuctionSignup from '../panels/auction/AuctionSignup';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';
const MODAL_CARD_FILTERS = 'filters';

const participants = [
  { id: 0, name: 'valeria', number: 1, time: 'Вчера в 20:30' },
  { id: 1, name: 'elena', number: 2, time: 'Вчера в 15:20' },
];

const AuctionView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.AUCTION_MAIN);
  const [activeModal, setActiveModal] = useState(null);

  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);

  const [filterSizes, setFilterSizes] = useState([36]);
  const [filterStyles, setFilterStyles] = useState(['Вечерний']);

  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };
  const modal_action = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    console.log('target modal:', target);
    console.log('currentTarget modal:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActiveModal(target || currentTarget);
    }
  };
  const openModal = () => {
    setFiltersModalOpened(true);
  };

  const closeModal = () => {
    setFiltersModalOpened(false);
  };
  const applyFilters = () => {
    let count = 0;

    filterSizes.length && count++;
    filterStyles.length && count++;

    closeModal();
    setFiltersCount(count);
  };

  //   TODO: a better way to use modals
  const modal = (
    <ModalRoot
      activeModal={filtersModalOpened ? MODAL_CARD_FILTERS : activeModal}
      onClose={() => setActiveModal(null)}
    >
      <ModalPage
        id={MODAL_PAGE_PARTICIPANTS}
        settlingHeight={100}
        header={
          <ModalPageHeader
            right={
              <PanelHeaderButton onClick={() => setActiveModal(null)}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            }
          >
            Участники
          </ModalPageHeader>
        }
      >
        <Gradient
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}
        >
          <Avatar size={96} src={cake} />
          <Title
            style={{ marginBottom: 8, marginTop: 20 }}
            level="2"
            weight="medium"
          >
            Торт 'красный бархат'
          </Title>
        </Gradient>
        <Group
          header={
            <Header mode="secondary" indicator={participants.length}>
              Итого
            </Header>
          }
        >
          {participants.map((user) => {
            return (
              <RichCell
                onClick={() => setActiveModal(MODAL_PAGE_SCREENSHOT)}
                multiline
                before={<Avatar size={72} src={null} />}
                text={`Билет № ${user.number}`}
                caption={user.time}
                after="+ 100 ₽"
                // actions={
                //   <React.Fragment>
                //     <Button>Посмотреть скрин</Button>
                //     <Button mode="secondary">Удалить</Button>
                //   </React.Fragment>
                // }
              >
                {user.name}
              </RichCell>
            );
          })}
        </Group>
      </ModalPage>
      <ModalPage
        id={MODAL_PAGE_SCREENSHOT}
        settlingHeight={100}
        header={
          <ModalPageHeader
            right={
              <PanelHeaderButton
                onClick={() => setActiveModal(MODAL_PAGE_PARTICIPANTS)}
              >
                <Icon24Dismiss />
              </PanelHeaderButton>
            }
          >
            Скриншот об оплате
          </ModalPageHeader>
        }
      >
        <img src={sc} style={{ width: '100%' }} />
      </ModalPage>
      <ModalPage
        id={MODAL_PAGE_RESULTS}
        settlingHeight={100}
        header={
          <ModalPageHeader
            right={
              <PanelHeaderButton onClick={() => setActiveModal(null)}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            }
          >
            Результаты розыгрыша
          </ModalPageHeader>
        }
      ></ModalPage>
      <ModalCard
        id={MODAL_CARD_FILTERS}
        header={'Фильтры'}
        actions={
          <Button size="l" mode="primary" onClick={applyFilters}>
            Показать результаты
          </Button>
        }
      >
        <FormLayout>
          <FormItem>
            <Checkbox>Есть доставка на дом</Checkbox>
            <Checkbox>Есть доставка в другие регионы</Checkbox>
            <Checkbox>Еще что-то...</Checkbox>
          </FormItem>
        </FormLayout>
      </ModalCard>
    </ModalRoot>
  );
  return (
    <View id={id} activePanel={activePanel} modal={modal}>
      <AuctionMain
        id={to.AUCTION_MAIN}
        go={go}
        openModal={openModal}
        filtersCount={filtersCount}
      />
      <AuctionDetail
        id={to.AUCTION_DETAIL}
        go={go}
        modal_action={modal_action}
      />
      <AddAuction id={to.AUCTION_ADD} go={go} />
      <EditAuction id={to.AUCTION_EDIT} go={go} />
      <AuctionSignup id={to.AUCTION_SIGNUP} go={go} />
    </View>
  );
};
export default AuctionView;
