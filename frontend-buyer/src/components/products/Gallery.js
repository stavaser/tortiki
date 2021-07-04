import { Card, CardGrid, Group } from '@vkontakte/vkui';
import React from 'react';
import cake from '../../assets/cake.jpeg';
import cake2 from '../../assets/cake2.jpeg';
import * as to from '../../navigation/products';

const fileList = [cake, cake2, cake, cake2];

const Gallery = ({ modal_action }) => {
  return (
    <Group>
      <CardGrid size="m">
        {fileList &&
          [...fileList, ...fileList].map((file) => (
            <Card
              onClick={modal_action}
              data-nav={to.MODAL_CARD_PHOTO_PREVIEW}
              data-image={file}
            >
              <img style={{ objectFit: 'cover', width: '100%' }} src={file} />
            </Card>
          ))}
      </CardGrid>
    </Group>
  );
};

export default Gallery;
