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

const AuctionView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeModal, setActiveModal] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [hiddenSecondary, setHiddenSecondary] = useState(true);
  const [fileList, setFileList] = useState([]);

  const products = ['торт', 'пицца'];

  const handleChange = (e) => {
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }
    setFileList([...images, ...fileList]);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setFileList({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };
  const participants = [
    { id: 0, name: 'valeria', number: 1, time: 'Вчера в 20:30' },
    { id: 1, name: 'elena', number: 2, time: 'Вчера в 15:20' },
  ];
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
      <Panel id="main">
        <PanelHeader>Розыгрыши</PanelHeader>
        <Group>
          <CellButton
            centered
            before={<Icon24Add />}
            onClick={() => setActivePanel('add')}
          >
            Создать розыгрыш
          </CellButton>
        </Group>
        <Group mode="plain" header={<Header>Активные (3)</Header>}>
          <CardGrid size="m">
            <ContentCard
              id="1"
              onClick={() => setActivePanel('detail')}
              image={cake2}
              subtitle="Торт 'красный бархат'"
              header="Ставка 100 руб"
              caption="(4 из 10 мест свободно)"
              maxHeight={100}
            />
            <ContentCard
              id="1"
              onClick={() => setActivePanel('detail')}
              image={cake2}
              subtitle="Торт 'красный бархат'"
              header="Ставка 100 руб"
              caption="4 из 10 мест свободно"
              maxHeight={100}
            />
            <ContentCard
              id="1"
              onClick={() => setActivePanel('detail')}
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
              onClick={() => setActivePanel('detail')}
              image={cake2}
              subtitle="Торт 'красный бархат'"
              header="Ставка 100 руб"
              caption="(4 из 10 мест свободно)"
              maxHeight={100}
            />
          </CardGrid>
        </Group>
      </Panel>
      <Panel id="detail">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
          // right={
          //   <PanelHeaderButton>
          //     <Icon28SettingsOutline />
          //   </PanelHeaderButton>
          // }
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
                <Link onClick={() => setActiveModal(MODAL_PAGE_PARTICIPANTS)}>
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
        <Div style={{ display: 'flex' }}>
          <Button
            size="l"
            stretched
            style={{ marginRight: 8 }}
            before={<Icon28ArchiveOutline />}
          >
            Архивировать
          </Button>
          <Button
            size="l"
            stretched
            mode="secondary"
            before={<Icon28EditOutline />}
            onClick={() => setActivePanel('edit')}
          >
            Редактировать
          </Button>
        </Div>
      </Panel>
      <Panel id="participants">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('detail')} />}
        >
          Участники
        </PanelHeader>
      </Panel>
      <Panel id="add">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
        >
          Создать розыгрыш
        </PanelHeader>
        <Group>
          <Group>
            <FormItem top="Название продукта">
              <Input placeholder="Название продукта" />
            </FormItem>
            <FormItem top="Тип">
              <Select
                placeholder="Не выбран"
                options={products.map((item) => ({
                  label: item,
                  value: item,
                }))}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
            <FormLayoutGroup mode="horizontal">
              <FormItem top="Ставка">
                <Input type="number" />
              </FormItem>
              <FormItem top="Кол-во участников">
                <Input type="number" />
              </FormItem>
            </FormLayoutGroup>

            <FormItem top="Описание">
              <Textarea />
            </FormItem>
            <FormItem top="Состав">
              <Textarea />
            </FormItem>
          </Group>
          <Group
            header={<Header aside={`(${fileList.length})`}>Фотографии</Header>}
          >
            <FormItem top="Загрузите фото">
              <File
                before={<Icon24Camera />}
                controlSize="m"
                stretched
                mode="commerce"
                multiple
                onChange={(e) => handleChange(e)}
              >
                Открыть галерею
              </File>
            </FormItem>
            <HorizontalScroll>
              <div style={{ display: 'flex' }}>
                {fileList &&
                  fileList.map((file) => (
                    <HorizontalCell size="l">
                      <Avatar
                        size={128}
                        mode="image"
                        src={file}
                        style={{ objectFit: 'cover' }}
                      />
                    </HorizontalCell>
                  ))}
              </div>
            </HorizontalScroll>
          </Group>
          <Group>
            <Cell
              disabled
              after={
                <Switch defaultChecked onChange={() => setHidden(!hidden)} />
              }
            >
              Доставка на дом
            </Cell>
            {!hidden && (
              <FormItem top="Цена" bottom="(Введите 0 если бесплатно)">
                <Input type="number" />
              </FormItem>
            )}
            <Cell
              disabled
              after={
                <Switch onChange={() => setHiddenSecondary(!hiddenSecondary)} />
              }
            >
              Доставка в другие регионы
            </Cell>
            {!hiddenSecondary && (
              <FormItem top="Цена" bottom="(Введите 0 если бесплатно)">
                <Input type="number" />
              </FormItem>
            )}
          </Group>
          <Div>
            <Button size="l" stretched mode="commerce">
              Отправить
            </Button>
          </Div>
        </Group>
      </Panel>
      <Panel id="edit">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('detail')} />}
        >
          Редактировать продукт
        </PanelHeader>
        <Group>
          <Group>
            <FormItem top="Название продукта">
              <Input placeholder="Название продукта" />
            </FormItem>
            <FormItem top="Тип">
              <Select
                placeholder="Не выбран"
                options={products.map((item) => ({
                  label: item,
                  value: item,
                }))}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} />
                )}
              />
            </FormItem>
            <FormLayoutGroup mode="horizontal">
              <FormItem top="Цена">
                <Input type="number" />
              </FormItem>
              <FormItem top="Вес" bottom="(Необязательно)">
                <Input type="number" />
              </FormItem>
            </FormLayoutGroup>

            <FormItem top="Описание">
              <Textarea />
            </FormItem>
            <FormItem top="Состав">
              <Textarea />
            </FormItem>
          </Group>
          <Group
            header={<Header aside={`(${fileList.length})`}>Фотографии</Header>}
          >
            <FormItem top="Загрузите фото">
              <File
                before={<Icon24Camera />}
                controlSize="m"
                stretched
                mode="commerce"
                multiple
                onChange={(e) => handleChange(e)}
              >
                Открыть галерею
              </File>
            </FormItem>
            <HorizontalScroll>
              <div style={{ display: 'flex' }}>
                {fileList &&
                  fileList.map((file) => (
                    <HorizontalCell size="l">
                      <Avatar
                        size={128}
                        mode="image"
                        src={file}
                        style={{ objectFit: 'cover' }}
                      />
                    </HorizontalCell>
                  ))}
              </div>
            </HorizontalScroll>
          </Group>
          <Group>
            <Cell
              disabled
              after={
                <Switch defaultChecked onChange={() => setHidden(!hidden)} />
              }
            >
              Доставка на дом
            </Cell>
            {!hidden && (
              <FormItem top="Цена" bottom="(Введите 0 если бесплатно)">
                <Input type="number" />
              </FormItem>
            )}
            <Cell
              disabled
              after={
                <Switch onChange={() => setHiddenSecondary(!hiddenSecondary)} />
              }
            >
              Доставка в другие регионы
            </Cell>
            {!hiddenSecondary && (
              <FormItem top="Цена" bottom="(Введите 0 если бесплатно)">
                <Input type="number" />
              </FormItem>
            )}
          </Group>
          <Div>
            <Button size="l" stretched mode="commerce">
              Сохранить
            </Button>
          </Div>
        </Group>
      </Panel>
    </View>
  );
};
export default AuctionView;
