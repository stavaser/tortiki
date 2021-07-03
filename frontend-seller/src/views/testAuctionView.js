import React, { useState } from 'react';
import AuctionMain from '../panels/auction/auctionMain';
import AuctionDetail from '../panels/auction/auctionDetail';
import EditAuction from '../panels/auction/editAuction';
import AddAuction from '../panels/auction/addAuction';

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
} from '@vkontakte/vkui';
import { Icon24Dismiss } from '@vkontakte/icons';

const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const TestAuctionView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('auction_main');
  const [activeModal, setActiveModal] = useState(null);
  const participants = [
    { id: 0, name: 'valeria', number: 1, time: 'Вчера в 20:30' },
    { id: 1, name: 'elena', number: 2, time: 'Вчера в 15:20' },
  ];
  const go = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };
  const modal_action = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    console.log('target modal:', target);
    console.log('currentTarget modal:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActiveModal(target || currentTarget);
    }
  };
  //   TODO: a better way to use modals
  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
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
    </ModalRoot>
  );
  return (
    <View id={id} activePanel={activePanel} modal={modal}>
      <AuctionMain id="auction_main" go={go} />
      <AuctionDetail id="auction_detail" go={go} modal_action={modal_action} />
      <AddAuction id="add_auction" go={go} />
      <EditAuction id="edit_auction" go={go} />
    </View>
  );
};
export default TestAuctionView;
