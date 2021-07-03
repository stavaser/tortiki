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

const ProfileMain = ({ id, go }) => {
  return (
    <Panel id={id}>
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
export default ProfileMain;
