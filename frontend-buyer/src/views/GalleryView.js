import { Icon28DeleteOutline, Icon28EditOutline } from '@vkontakte/icons';
import { Button, Div, ModalCard, ModalRoot, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import GalleryMain from '../panels/gallery/GalleryMain';
import * as to from '../navigation/gallery';

const MODAL_CARD_PHOTO_PREVIEW = 'photo_preview';

const GalleryView = ({ id }) => {
  const [activePanel, setActivePanel] = useState(to.GALLERY_MAIN);
  const [activeModal, setActiveModal] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState('');

  const handleChange = (e) => {
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }
    setFileList([...images, ...fileList]);
  };
  const go = (e) => {
    const target = e.target.dataset.nav;
    const currentTarget = e.currentTarget.dataset.nav;
    if (target || currentTarget) {
      setActivePanel(target || currentTarget);
    }
  };
  const modal_action = (e) => {
    const currentTarget = e.currentTarget.dataset.nav;
    const file = e.currentTarget.dataset.image;
    setActiveModal(currentTarget);
    setPreviewImage(file);
  };

  const set_preview_image = (file) => {
    setPreviewImage(file);
  };
  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
      <ModalCard
        id={MODAL_CARD_PHOTO_PREVIEW}
        onClose={() => setActiveModal(null)}
        header={'Фотография'}
        style={{ marginBottom: '200px' }}
      >
        <img src={previewImage} style={{ width: '100%', marginTop: '10px' }} />
        <Div style={{ display: 'flex' }}>
          <Button
            size="l"
            before={<Icon28DeleteOutline />}
            stretched
            style={{ marginRight: 8 }}
          >
            Удалить
          </Button>
          <Button
            size="l"
            before={<Icon28EditOutline />}
            stretched
            mode="secondary"
          >
            Изменить
          </Button>
        </Div>
      </ModalCard>
    </ModalRoot>
  );
  return (
    <View id={id} activePanel={activePanel} modal={modal}>
      <GalleryMain id={to.GALLERY_MAIN} go={go} modal_action={modal_action} />
    </View>
  );
};
export default GalleryView;
