import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import cake from '../assets/cake.jpeg';
import cake2 from '../assets/cake2.jpeg';
import sc from '../assets/sc.jpeg';
import conf from '../assets/conf.gif';
import conf2 from '../assets/conf2.gif';
import conf3 from '../assets/conf3.gif';

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderEdit,
  Header,
  Group,
  Button,
  SimpleCell,
  PanelHeaderBack,
  PanelHeaderButton,
  Div,
  CardGrid,
  Card,
  CardScroll,
  ContentCard,
  Gallery,
  InfoRow,
  Title,
  CellButton,
  FormItem,
  Input,
  SliderSwitch,
  CustomSelectOption,
  Select,
  Textarea,
  FormLayoutGroup,
  Switch,
  Checkbox,
  Cell,
  File,
  HorizontalCell,
  HorizontalScroll,
  Avatar,
  UsersStack,
  Link,
  Caption,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Gradient,
  RichCell,
  Banner,
} from '@vkontakte/vkui';
import {
  Icon24Add,
  Icon24Camera,
  Icon28SettingsOutline,
  Icon28ArchiveOutline,
  Icon28EditOutline,
  Icon28UnarchiveOutline,
  Icon24Dismiss,
} from '@vkontakte/icons';
const MODAL_PAGE_PARTICIPANTS = 'participants';
const MODAL_PAGE_SCREENSHOT = 'screenshot';
const MODAL_PAGE_RESULTS = 'results';

const AuctionModal = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeModal, setActiveModal] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [hiddenSecondary, setHiddenSecondary] = useState(true);
  const [fileList, setFileList] = useState([]);

  const products = ['торт', 'пицца'];

  const participants = [
    { id: 0, name: 'valeria', number: 1, time: 'Вчера в 20:30' },
    { id: 1, name: 'elena', number: 2, time: 'Вчера в 15:20' },
  ];

  const modal_action = (e) => {
    const target = e.target.dataset.to;
    const currentTarget = e.currentTarget.dataset.to;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    console.log(e);
    if (target || currentTarget) {
      setActiveModal(target || currentTarget);
    } else {
      setActiveModal(null);
    }
  };

  return (
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
};

export default AuctionModal;
