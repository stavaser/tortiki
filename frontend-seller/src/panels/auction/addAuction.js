import { Icon24Camera } from '@vkontakte/icons';
import {
  Avatar,
  Button,
  Cell,
  CustomSelectOption,
  Div,
  File,
  FormItem,
  FormLayoutGroup,
  Group,
  Header,
  HorizontalCell,
  HorizontalScroll,
  Input,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Select,
  Switch,
  Textarea,
} from '@vkontakte/vkui';
import React, { useState } from 'react';

const AddAuction = ({ id, go }) => {
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
        left={<PanelHeaderBack onClick={go} data-to="auction_main" />}
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
  );
};
export default AddAuction;
