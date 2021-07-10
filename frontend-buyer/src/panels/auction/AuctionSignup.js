import {
  Icon24Camera,
  Icon28PaymentCardOutline,
  Icon28PhoneOutline,
  Icon28NameTagOutline,
  Icon28CopyOutline,
  Icon16Done,
} from '@vkontakte/icons';
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
  SubnavigationButton,
  SubnavigationBar,
  SimpleCell,
  InfoRow,
  IconButton,
  Snackbar,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as to from '../../navigation/auction';
import { LOTTERY_PANEL_CHANGED } from '../../redux/constants/navigation.constants';
import './style.css';

const crossed = {
  backgroundColor: 'rgba(0,0,0,0.1)',
  backgroundImage:
    'linear-gradient(to top left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(0,0,0,1) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%), linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(0,0,0,1) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)',
};
const buttonStyles = {
  marginRight: '10px',
  marginBottom: '10px',
  flexGrow: 1,
};
const AuctionSignup = ({ id, go }) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const [finished, setFinished] = useState(false);
  const [hiddenSecondary, setHiddenSecondary] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);
  const [isTaken, setIsTaken] = useState(true);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const changePanel = (panel) => {
    dispatch({
      type: LOTTERY_PANEL_CHANGED,
      payload: panel,
    });
  };

  const handleChange = (e) => {
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }
    setFileList([...images, ...fileList]);

    if (lotteryNumbers) {
      setFinished(true);
    }
  };
  const select = (number) => {
    if (lotteryNumbers.includes(number)) {
      setLotteryNumbers(lotteryNumbers.filter((e) => e !== number));
    } else {
      setLotteryNumbers([...lotteryNumbers, number]);
    }
  };
  console.log(finished);
  console.log(lotteryNumbers);

  const snackBar = (
    <Snackbar
      duration={800}
      onClose={() => setSnackBarVisible(false)}
      before={
        <Avatar size={24} style={{ background: 'var(--accent)' }}>
          <Icon16Done fill="#fff" width={14} height={14} />
        </Avatar>
      }
    >
      Текст скопирован!
    </Snackbar>
  );
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack onClick={() => changePanel(to.AUCTION_DETAIL)} />
        }
      >
        Участвовать
      </PanelHeader>
      <Group>
        <Header mode="secondary">Выберите номер</Header>
        <Div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'space-between',
          }}
        >
          {[...Array.from({ length: 12 }, (v, i) => i + 1)].map((i) => (
            <Button
              className={`lottery-number ${i === 6 && 'crossed'} ${
                lotteryNumbers.includes(i) && 'selected'
              }`}
              size="l"
              mode="outline"
              selected={lotteryNumbers.includes(i)}
              onClick={() => select(i)}
            >
              {i}
            </Button>
          ))}
        </Div>
        <Header>Итого к оплате: {lotteryNumbers.length * 100} ₽</Header>
      </Group>
      <Group>
        <Group>
          <Header mode="secondary">Реквизиты</Header>
          <SimpleCell
            before={<Icon28PaymentCardOutline />}
            after={
              <IconButton
                onClick={() => {
                  setSnackBarVisible(true);
                  navigator.clipboard.writeText('5555 5555 5555 5555');
                }}
              >
                <Icon28CopyOutline />
              </IconButton>
            }
          >
            <InfoRow header="Номер карты">5555 5555 5555 5555</InfoRow>
          </SimpleCell>
          <SimpleCell
            before={<Icon28PhoneOutline />}
            after={
              <IconButton
                onClick={() => {
                  setSnackBarVisible(true);
                  navigator.clipboard.writeText('89841138757');
                }}
              >
                <Icon28CopyOutline />
              </IconButton>
            }
          >
            <InfoRow header="Номер мобильного банка">89841138757</InfoRow>
          </SimpleCell>
          <SimpleCell
            before={<Icon28NameTagOutline />}
            after={
              <IconButton
                onClick={() => {
                  setSnackBarVisible(true);
                  navigator.clipboard.writeText('Фамилия Имя Отчество');
                }}
              >
                <Icon28CopyOutline />
              </IconButton>
            }
          >
            <InfoRow header="ФИО получателя">Фамилия Имя Отчество</InfoRow>
          </SimpleCell>

          <FormItem top="Загрузите чек">
            <File
              before={<Icon24Camera />}
              controlSize="m"
              stretched
              mode="commerce"
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
        <Div>
          <Button
            size="l"
            stretched
            mode="commerce"
            onClick={() => changePanel(to.AUCTION_DETAIL)}
          >
            Отправить
          </Button>
        </Div>
      </Group>
      {snackBarVisible && snackBar}
    </Panel>
  );
};
export default AuctionSignup;
