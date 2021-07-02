import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import cake from '../assets/cake.jpeg';
import cake2 from '../assets/cake2.jpeg';

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
} from '@vkontakte/vkui';
import { Icon24Add, Icon24Camera } from '@vkontakte/icons';

const ProductsView = ({ id }) => {
  const [activePanel, setActivePanel] = useState('main');
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
  return (
    <View id="home" activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Главная</PanelHeader>
        <Group>
          <CellButton
            centered
            before={<Icon24Add />}
            onClick={() => setActivePanel('add')}
          >
            Добавить продукт
          </CellButton>
        </Group>
        <Group mode="plain" header={<Header>Ваши продукты (3)</Header>}>
          <CardGrid size="m">
            <ContentCard
              id="1"
              onClick={() => setActivePanel('detail')}
              image={cake}
              subtitle="Торт 'красный бархат'"
              header="1200 руб"
              caption="1200 гр"
              maxHeight={100}
            />
            <ContentCard
              id="2"
              onClick={() => setActivePanel('detail')}
              image={cake}
              subtitle="Торт 'красный бархат'й бархат'й бархат'"
              header="1200 руб"
              caption="1200 гр"
              maxHeight={100}
            />
            <ContentCard
              id="2"
              onClick={() => setActivePanel('detail')}
              image={cake}
              subtitle="Торт 'красный бархат'й бархат'й бархат'"
              header="1200 руб"
              caption="1200 гр"
              maxHeight={100}
            />
          </CardGrid>
        </Group>
        <Group mode="plain" header={<Header>Архив (1)</Header>}>
          <CardGrid size="m">
            <ContentCard
              id="1"
              onClick={() => setActivePanel('auction')}
              image={cake2}
              subtitle="Торт 'красный бархат'"
              header="Ставка 100 руб"
              caption="1200 гр"
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

          <Header
            multiline
            level="1"
            weight="semibold"
            style={{ marginTop: 16 }}
            aside={
              <Title level="1" weight="bold">
                1200 руб
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
          <Button size="l" stretched mode="commerce">
            Написать в What's App
          </Button>
        </Div>
      </Panel>
      <Panel id="auction">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
        >
          Розыгрыш
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

          <Header
            multiline
            level="1"
            weight="semibold"
            style={{ marginTop: 16 }}
            aside={
              <Title level="1" weight="bold">
                1200 руб
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
          <Div>
            <Button size="l" stretched mode="commerce">
              Участвовать
            </Button>
          </Div>
        </Group>
      </Panel>
      <Panel id="add">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
        >
          Добавить продукт
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
              Отправить
            </Button>
          </Div>
        </Group>
      </Panel>
    </View>
  );
};
export default ProductsView;
