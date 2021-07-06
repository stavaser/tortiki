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
  ViewWidth,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import React, { useEffect, useState } from 'react';
import { useScreenSpinner } from './hooks/useScreenSpinner';
import { AUCTION, FAVORITES, PRODUCTS, PROFILE, AUTH } from './navigation/epic';
import AuctionView from './views/AuctionView';
import AuthView from './views/AuthView';
import FavoritesView from './views/FavortiesView';
import GalleryView from './views/GalleryView';
import ProductsView from './views/ProductsView';
import ProfileView from './views/ProfileView';

const App = () => {
  const { viewWidth } = useAdaptivity();
  const [activeStory, setActiveStory] = useState(PROFILE);
  const [popout, hidePopout] = useScreenSpinner();
  useEffect(() => hidePopout(), []);

  const onStoryChange = (e) => {
    console.log(e.currentTarget.dataset.story);
    setActiveStory(e.currentTarget.dataset.story);
  };
  const isDesktop = viewWidth >= ViewWidth.TABLET;

  return (
    <ConfigProvider webviewType="internal">
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
                        selected={activeStory === PRODUCTS}
                        data-story={PRODUCTS}
                        text={PRODUCTS}
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === AUCTION}
                        data-story={AUCTION}
                        text={AUCTION}
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === FAVORITES}
                        data-story={FAVORITES}
                        label="12"
                        text={FAVORITES}
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={onStoryChange}
                        selected={activeStory === PROFILE}
                        data-story={PROFILE}
                        text={PROFILE}
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                    </Tabbar>
                  )
                }
              >
                <ProductsView id={PRODUCTS} />
                <AuctionView id={AUCTION} />
                {/* <ProfileView id={PROFILE} /> */}
                <FavoritesView id={FAVORITES} />
                <AuthView id={PROFILE} />
              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
