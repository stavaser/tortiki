import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import {
  useAdaptivity,
  usePlatform,
  ViewWidth,
  AdaptivityProvider,
  AppRoot,
  Root,
  ConfigProvider,
  Panel,
  PanelHeader,
  Group,
  CellButton,
  Cell,
  SplitLayout,
  SplitCol,
  Epic,
  Tabbar,
  TabbarItem,
  PanelHeaderBack,
  Placeholder,
} from '@vkontakte/vkui';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import ProfileView from './views/profileView';
import ProductsView from './views/productsView';
import AuctionView from './views/auctionView';
const App = () => {
  const { viewWidth } = useAdaptivity();
  const platform = usePlatform();
  const [activeStory, setActiveStory] = useState('profile');
  const onStoryChange = (e) => {
    console.log(e.currentTarget.dataset.story);
    setActiveStory(e.currentTarget.dataset.story);
  };
  const isDesktop = viewWidth >= ViewWidth.TABLET;

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            header={<PanelHeader separator={false} />}
            style={{ justifyContent: 'center' }}
          >
            <SplitCol
              animate={!isDesktop}
              spaced={isDesktop}
              width={isDesktop ? '560px' : '100%'}
              maxWidth={isDesktop ? '560px' : '100%'}
            >
              <Epic
                activeStory={activeStory}
                tabbar={
                  !isDesktop && (
                    <Tabbar>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'products'}
                        data-story="products"
                        text="Продукты"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'auction'}
                        data-story="auction"
                        text="Розыгрыши"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'gallery'}
                        data-story="gallery"
                        label="12"
                        text="Галерея"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === 'profile'}
                        data-story="profile"
                        text="Профиль"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                    </Tabbar>
                  )
                }
              >
                <ProductsView id="products" />
                <AuctionView id="auction" />
                <ProfileView id="profile" />
              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
