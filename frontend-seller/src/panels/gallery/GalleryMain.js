import {
  Icon24Add,
  Icon28DeleteOutline,
  Icon28EditOutline,
} from '@vkontakte/icons';
import {
  Button,
  Card,
  CardGrid,
  Div,
  File,
  Group,
  ModalCard,
  ModalRoot,
  Panel,
  PanelHeader,
  View,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
const MODAL_CARD_PHOTO_PREVIEW = 'photo_preview';

const GalleryMain = ({ id, go, modal_action, set_preview_image }) => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeModal, setActiveModal] = useState(null);
  const [fileList, setFileList] = useState([]);
  //   const [previewImage, setPreviewImage] = useState('');

  const handleChange = (e) => {
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }
    setFileList([...images, ...fileList]);
  };

  return (
    <Panel id="main">
      <PanelHeader>Галлерея</PanelHeader>
      <Group>
        <Div>
          <File
            before={<Icon24Add />}
            mode="outline"
            controlSize="l"
            size="l"
            stretched
            multiple
            onChange={(e) => handleChange(e)}
          >
            Загрузить фотографии
          </File>
        </Div>
      </Group>

      <Group>
        <CardGrid size="m">
          {fileList &&
            fileList.map((file) => (
              <Card
                onClick={modal_action}
                data-to={MODAL_CARD_PHOTO_PREVIEW}
                data-image={file}
              >
                <img style={{ objectFit: 'cover', width: '100%' }} src={file} />
              </Card>
            ))}
          <Card>
            <div style={{ paddingBottom: '82%' }} />
          </Card>
          <Card>
            <div style={{ paddingBottom: '62%' }} />
          </Card>
          <Card>
            <div style={{ paddingBottom: '62%' }} />
          </Card>
          <Card>
            <div style={{ paddingBottom: '62%' }} />
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};
export default GalleryMain;
