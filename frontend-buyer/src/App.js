import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Epic,
  PanelHeader,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  useAdaptivity,
  usePlatform,
  ViewWidth,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import React, { useEffect, useState } from 'react';
import { useScreenSpinner } from './hooks/useScreenSpinner';
import AuctionView from './views/AuctionView';
import GalleryView from './views/GalleryView';
import ProductsView from './views/ProductsView';
import ProfileView from './views/ProfileView';

const App = () => {
  const { viewWidth } = useAdaptivity();
  const [activeStory, setActiveStory] = useState('profile');
  const [popout, hidePopout] = useScreenSpinner();
  useEffect(() => hidePopout(), []);

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
                <GalleryView id="gallery" />
              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
