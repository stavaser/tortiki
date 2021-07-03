import React, { useState } from 'react';
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
} from '@vkontakte/vkui';
import {
  Icon24Add,
  Icon24Camera,
  Icon28SettingsOutline,
  Icon28ArchiveOutline,
  Icon28EditOutline,
  Icon28UnarchiveOutline,
} from '@vkontakte/icons';
import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';

const EditProducts = ({ id, go }) => {
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

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={go} data-to="products_detail" />}
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
  );
};
export default EditProducts;
